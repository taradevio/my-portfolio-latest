---
title: Why Data is Important for LLM
image: /gigo.webp
alt: A minimal abstract split composition showing the importance of data for AI
description: ''
date: 2026-03-19T00:00:00.000Z
author: Nanda Kresnatara
tags:
  - ai
  - learning
  - machine learning
caption: 'Garbage In, Garbage Out'
---

I had always thought that I could just feed any data into AI and expected a good output.  One tiny example that I sometimes still do is less context when prompting. I remember asking:

> Create me a set of schedule to support my fundamental daily learning on Software and AI Engineer

It then created me schedules. It technically worked..., but not quite! It gave me an 8-hour straight schedule with no breaks. What I actually wanted was:

* Multiple learning sessions (morning, afternoon, evening)
* Breaks in between
* Software Engineer topics in the morning and afternoon
* AI topics in the evening

As you can see, even though they have the same intent: create a set of schedules, the outcome is very different, just because of a missing context. This simple example already shows how critical input data is. And that’s just prompting. When we scale this up to real-world systems feeding data into LLMs like Gemini, ChatGPT, Qwen, or Kimi, the impact becomes much bigger.

## Data Types

Speaking of data, I think we also need to understand what data that goes in and not just nod along, "Oh, let's feed some data" without really understanding what kind of data we're dealing with. There are three main types of data:

* Structured data
* Unstructured data
* Semi-structured data

### Structured data![](/christine-sandu-yo5wIVapll0-unsplash.jpg)

Structured data has a fixed, predefined format.

Think of spreadsheets or relational databases—data neatly organized into rows and columns. It’s easy to query, validate, and process.

Examples:

* Financial reports
* Survey results
* Class schedule

### Unstructured data![](/saad-chaudhry-cYpqYxGeqts-unsplash.jpg)

Unstructured data has no predefined format.

This is actually what we interact with most of the time in real life.

Examples:

* Emails
* Images
* Videos
* Chat messages

### Semi-structured data![](/thought-catalog-cAEQVM60PLI-unsplash.jpg)

Semi-structured data sits somewhere in between.

It doesn’t follow a strict table format, but it still contains some organization through metadata or tags.

A good example is a social media post:

1. The image itself → unstructured
2. Metadata (caption, hashtags, timestamp) → structured elements

## How Data Shapes AI

So far I think we already understand that in the example of my own, data is crucial. In a machine learning domain, there is this well-known principle:

> Garbage In, Garbage Out (GIGO)

Basically, if your input data is messy, incomplete, or misleading, your output will reflect that. Imagine if models are ingested with:

* Noisy datasets
* Biased sources
* Incomplete information

I don't think we will achieve what we have today if they were trained on poor-quality data.

## Real World Example

Currently, I’m building a project that uses OCR + LLM to extract and parse data from shopping receipts into a backend system, which is then visualized on a dashboard. I did a lot of trial and error, especially on receipts that are not in good conditions. Here's the first example:

### &#xA;Case 1: Blurry Receipt![](/blurred-receipt.jpg)

In the above example, two critical things are blurry: date and item name. I used RapidOCR to scan the receipt and here's what I got:

```bash
Bangorejo Sol WARUNG lobaru, Kwar SAYUR Sukoharjo UPSP KIIA Gr rugu!
/02/ 10115 /2026 Kasir:KASIK Jam 10:57
PHIFIK 1PCKx NGKUNG 8. 000= BALADO 8. .000
KEMBALI.. JUMLAH OT A UANG .. 10 8 2. 000 .000 .000
1 Items Pembayai TUNAI
TERIMA KASIH
ATAS KUNJUNGAN ANDA
PEMESANAN xxxxxxxxxxxx
KRITIK DAN SARAN xxxxxxxxxxxx
```

As you can see, the date is fragmented 02 and 2026 and the item name is partially corrupted. Yes, the gap is my biggest obstacle in laying out what has been scanned, but apart from that, bad data produces bad output.

Then I passed this into an LLM (running via Ollama, model: GPT-OSS:120b-cloud):

```
response data: {'receipt_id': 'c5f962ce-1a48-432e-a4d2-a24ea048597f', 'merchant_name': {'value': 'WARUNG SAYUR KIIA'}, 'date': {'value': None}, 'time': {'value': '10:57'}, 'items': [{'name': {'value': 'NGKUNG BALADO'}, 'qty': {'value': 1}, 'price': {'value': 8000}, 'total_price': {'value': 8000}, 'category': {'value': 'Food & Beverage'}, 'discount_type': {'value': None}, 'discount_value': {'value': 0}, 'voucher_amount': {'value': 0}}], 'total_amount': {'value': 8000}}
```

The model cleaned up some parts, especially the merchant name, but:

* The date is completely missing
* Item names are still incomplete

Here's another example:

### Case 2: Dirty Receipt![](/dirty-receipt.jpg)

Now what about a noisy, dirty receipt? Here's what I got:

```bash
ALFAMART KOMARASAN SUKOHARDO
KWARASAN SUKOHAROZF
CV ANXSRAH MARATA
JL. RAYA SOLO 4 BAKI NO. 24A ABRT OR
NPWP : 73  |  030.3-532060
Bon  |  701 13024083 Kasir POVRE
LERL AIR5L  |  1 16,090 16.0e
Disc  |  500
KP BRAMDING (5) 1 200 260
CNIONHRN (S) 1 200 200
Total Item! 16.009
Total Disc 589
Total Belanja 15, ,500
Tunai 15, 500
Kerbalian  |  D
PPN  |  DPP: 14. 324 PPM: 1.575
Tgl.  |  13- 02- 2026 16:30:18 V. 2025 11. 6
```

As you can see, the OCR got some information correct and others are quite broken. The LLM returned this output:

```bash
response data: {'receipt_id': 'ff78be41-a3d7-4f35-b9ca-e54ca7eb5b9a', 'merchant_name': {'value': 'ALFAMART'}, 'date': {'value': '2026-02-13'}, 'time': {'value': '16:30'}, 'items': [{'name': {'value': 'LERL AIR5L'}, 'qty': {'value': 1}, 'price': {'value': 16090}, 'total_price': {'value': 15590}, 'category': {'value': 'Food & Beverage'}, 'discount_type': {'value': 'nominal'}, 'discount_value': {'value': 500}, 'voucher_amount': {'value': 0}}, {'name': {'value': 'KP BRAMDING (5)'}, 'qty': {'value': 1}, 'price': {'value': 200}, 'total_price': {'value': 260}, 'category': {'value': 'Food & Beverage'}, 'discount_type': {'value': None}, 'discount_value': {'value': 0}, 'voucher_amount': {'value': 0}}, {'name': {'value': '(S)'}, 'qty': {'value': 1}, 'price': {'value': 200}, 'total_price': {'value': 200}, 'category': {'value': 'Food & Beverage'}, 'discount_type': {'value': None}, 'discount_value': {'value': 0}, 'voucher_amount': {'value': 0}}], 'total_amount': {'value': 16050}}
```

Interestingly:

* The date and time were reconstructed correctly
* But item names and pricing details are inconsistent

The body (line items) is where things degrade the most.

## Key Insight

This pipeline highlights something important:

> LLMs don’t “fix” bad data, but rather interpret it

If the OCR output is already corrupted/broken:

1. Missing tokens → missing fields
2. Wrong tokens → hallucinated or incorrect values

## Conclusion

It is important to note that what we feed into LLMs will affect its output. At every level—prompting, preprocessing, or model input—data quality directly shapes the output.

Or, as the principle puts it:

> Garbage In, Garbage Out
