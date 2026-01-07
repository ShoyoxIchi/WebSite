# API Contracts

## Overview
The backend will serve hosting provider data, reviews, and comparisons.
Base URL: `/api` (Proxied to backend:8001)

## Data Models

### Provider
```json
{
  "id": "hostinger",
  "name": "Hostinger",
  "slug": "hostinger-review-2026",
  "logo": "url...",
  "rating": 4.9,
  "priceIntro": 2.99,
  "priceRenewal": 7.99,
  "storage": "100 GB SSD",
  "websites": "100",
  "domain": "Free (1st Year)",
  "speed": "298 ms",
  "uptime": "99.99%",
  "bestFor": "Best Overall Value",
  "verdict": "...",
  "pros": ["..."],
  "cons": ["..."],
  "link": "https://hostinger.com"
}
```

### Review
```json
{
  "slug": "hostinger-review-2026",
  "providerId": "hostinger",
  "title": "Hostinger Review 2026...",
  "author": "John WP",
  "date": "August 12, 2025",
  "content": "HTML content..."
}
```

## Endpoints

### GET /api/providers
- Returns list of all providers for the comparison table.
- Query params: `limit` (optional)

### GET /api/providers/:slug
- Returns single provider details.

### GET /api/reviews/:slug
- Returns review content and associated provider data.

### POST /api/seed
- Internal endpoint to populate database with initial data from mockData.
