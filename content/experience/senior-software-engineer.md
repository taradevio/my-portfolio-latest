---
title: Full Stack Developer
company: Fingerspot
location: 'Sukoharjo, Indonesia'
startDate: 2025-03-24T00:00:00.000Z
isCurrent: true
description: >-
  Engineered an end-to-end autonomous sales pipeline that leverages
  conversational AI and secure webhook-driven workflows to automate the customer
  journey from initial inquiry to verified transaction fulfillment.
stack:
  - React
  - TypeScript
  - Javascript
  - Hono
  - Supabase/PostgreSQL
  - N8N
---

* Engineered automated sales platform integrating WhatsApp Business API, N8N, Midtrans, and React/Hono with bidirectional webhooks for real-time order sync across admin, customer, and messaging interfaces
* Built conversational AI agent using N8N-orchestrated RAG pipeline with Supabase vector store to autonomously handle product inquiries and checkout generation via WhatsApp, guiding customers from discovery to payment
* Architected dual-dashboard system with admin and customer portals managing full order lifecycle, implementing webhook-driven state sync for 100% data consistency across portals and WhatsApp notifications in real-time

  Implemented production-grade security patterns including rate-limited auth, HMAC-verified webhooks (SHA-512), and idempotent processing with state validation, coordinating status updates across 4 services (Midtrans, WhatsApp, N8N, Supabase)
