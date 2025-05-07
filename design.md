# Overview

This is a web application built with **Next.js 15 (App Router)**, **React 19**, and **TypeScript**. It serves as a frontend for the "Lord of the Rings" API, providing users with access to movies, characters, and quotes from the franchise.

# Architecture

## Directory Structure

```
public/                 # Assets
src/
  app/                  # Next.js app directory (routing, layouts, pages)
    layout.tsx          # Root layout, global styles, font setup
    page.tsx            # Home page with navigation
    movies/             # Movies feature
    characters/         # Characters feature
    quotes/             # Quotes feature
    globals.css         # Global styles
  shared/
    components/         # Reusable UI components
      header/
      linkItem/
      pagination/
    helpers/            # Utility functions
  api/                  # API layer and data models
    api.ts              # API client
    baseFetch.ts        # Fetch utility with error handling
    models/             # TypeScript data models
```

# API Layer

## `baseFetch`
- Generic async fetch utility.
- Handles authentication via API key and URL from environment variables.
- Returns typed responses with status handling.

## `api.ts`
- Exposes methods for fetching movies, characters, and quotes.
- Handles pagination and filtering.
- Returns typed data models for type safety.

# Pages & Routing

- **Home Page:** Lists navigation links to Movies, Characters, and Quotes.
- **Feature Pages:** Each feature (movies, characters, quotes) has its own directory and page(s) under `src/app/`.
- **Layout:** Global layout sets up fonts, theming, and wraps all pages.

# Styling & Theming

- CSS Modules for local component styles.
- Global styles in `globals.css`.

