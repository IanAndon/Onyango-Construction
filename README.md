# Onyango Construction Company Limited — Website

A modern, professional construction company website built with **Next.js 14** (App Router) and **Tailwind CSS**.

## Features

- **Pages:** Home, About Us, Services, Projects, Appointment, Contact
- **Brand:** Deep blue/dark gray primary, orange accent for CTAs, clean typography
- **Responsive:** Mobile-first layout with reusable Navbar and Footer
- **Forms:** Appointment and Contact forms with client-side validation and success states (ready for API integration)
- **SEO:** Metadata and semantic structure per page

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project structure

- `src/app/` — App Router pages and layout
- `src/components/` — Navbar, Footer, AppointmentForm, ContactForm
- `src/lib/data.ts` — Shared content (services, projects, stats); replace with API when ready

## Connecting the forms

- **Appointment:** In `src/components/AppointmentForm.tsx`, replace the mock `setTimeout` with a `fetch("/api/appointment", { method: "POST", body: JSON.stringify(formData) })` (or your backend URL).
- **Contact:** In `src/components/ContactForm.tsx`, do the same for your contact API endpoint.

## Map placeholder

On the Contact page, replace the “Google Map embed placeholder” section with your Google Maps iframe or embed code.
