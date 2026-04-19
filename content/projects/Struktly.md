---
title: Struktly
link: 'https://github.com/taradevio/struktly'
description: Shopping receipt scanner utilizing OCR + Ollama LLM
stack:
  - React
  - Hono
  - FastAPI
  - Supabase
  - RapidOCR
  - Ollama
  - OpenCV
date: 2026-04-08T00:00:00.000Z
---

## Background

I had a pile of shopping receipts sitting on my desk with nowhere to go. Instead of tossing them, I figured they could actually be useful — so I built something around them. Struktly started as a personal itch: a way to digitize and make sense of physical receipts without manually typing anything out.

## Ideate an App

The initial idea was simple — scan receipts, extract the data, visualize it. I originally considered using a vision-capable LLM (OpenClaw) to handle everything end-to-end, but running it purely through Ollama Cloud meant token usage would hit the ceiling fast. That constraint pushed me toward a smarter architecture: pair a lightweight OCR engine with an LLM, so the heavy lifting of text extraction stays cheap and local, and the LLM only handles the structured parsing layer.

![](</Strukly General Pipeline.webp>)

## What to Solve

Receipts are unstructured, inconsistent, and visually noisy — different layouts per merchant, varying print quality, skewed angles. The core problem is turning that chaos into clean, structured data: merchant name, items, prices, date, total. On top of that, not every scan comes out confident enough to trust blindly, so the system also needs to know when to flag something for human review instead of silently getting it wrong.

## How I Solve It

The pipeline runs through a FastAPI ML service that handles image preprocessing via OpenCV, OCR via RapidOCR with ONNX models, then passes the extracted text to a locally-run Ollama LLM for structured parsing. The backend lives on Hono/Cloudflare Workers, the frontend is a Telegram Mini App built in React, and everything persists to Supabase. A confidence-based status system routes each receipt to either \`VERIFIED\` or \`Action Required (HITL)\` — so the user only needs to intervene when the pipeline isn't sure.

## Challenges

OCR on real-world receipts is messier than it sounds. Indonesian merchant receipts vary wildly in layout, font, and print quality, which made consistent parsing genuinely hard. Getting the preprocessing right — detecting skew, reconstructing lines from raw bounding boxes, handling multi-receipt edge cases — required a lot of iteration. On the infra side, deploying the ML service to a homelab ThinkCentre behind a WISP double-NAT meant getting creative with Cloudflare Tunnel for public ingress and Tailscale for CI/CD access.

## Further Enhancement

The immediate roadmap is an analytics dashboard — spending over time, category breakdowns, merchant frequency. Longer term, improving parsing consistency through better prompt engineering and eval-driven iteration (51 labeled receipts is a start, not a finish), and exploring whether a fine-tuned model eventually makes sense once there's enough clean labeled data to justify it.
