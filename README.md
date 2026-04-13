# MACH Project

## Cloudflare Blog Setup

This project now includes a Cloudflare-native blog system built for:

- Cloudflare Pages hosting
- Cloudflare Pages Functions API routes
- Cloudflare D1 database
- React + TypeScript frontend

### Routes

Public routes:

- `/`
- `/about`
- `/packages`
- `/solutions`
- `/solutions/operations`
- `/contact`

Admin routes:

- `/admin/login`
- `/admin`
- `/admin/posts/new`
- `/admin/posts/:id/edit`

Functions API routes:

- `GET /api/posts`
- `GET /api/posts/:slug`
- `POST /api/admin/login`
- `POST /api/admin/logout`
- `GET /api/admin/me`
- `GET /api/admin/posts`
- `POST /api/admin/posts`
- `GET /api/admin/posts/:id`
- `PUT /api/admin/posts/:id`
- `DELETE /api/admin/posts/:id`
- `GET /api/admin/users`
- `POST /api/admin/users`

### Required Environment Variables

Frontend/runtime:

- `VITE_TURNSTILE_SITE_KEY`
- `TURNSTILE_SECRET_KEY`
- `BREVO_API_KEY`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL`

Optional contact email metadata:

- `CONTACT_FROM_NAME`
- `CONTACT_TO_NAME`

Optional blog image uploads:

- `IMAGEKIT_PUBLIC_KEY`
- `IMAGEKIT_PRIVATE_KEY`
- `IMAGEKIT_URL_ENDPOINT`

### D1 Database

Create the D1 database:

```bash
npx wrangler d1 create mach-blog-db
```

Copy the returned database ID into [wrangler.toml](/Users/santhosh/Downloads/mach_web-main/wrangler.toml).

Apply migrations:

```bash
npx wrangler d1 migrations apply mach-blog-db --local
npx wrangler d1 migrations apply mach-blog-db --remote
```

Apply seed data:

```bash
npx wrangler d1 execute mach-blog-db --local --file=./migrations/0002_blog_seed.sql
npx wrangler d1 execute mach-blog-db --remote --file=./migrations/0002_blog_seed.sql
```

### Local Development

Install dependencies:

```bash
npm install
```

Run the frontend build:

```bash
npm run build
```

Run Cloudflare Pages locally against the built output:

```bash
npx wrangler pages dev dist
```

For normal frontend-only iteration you can still use:

```bash
npm run dev
```

But API routes and D1 behavior should be verified with `wrangler pages dev`.

### Deployment to Cloudflare Pages

1. Create a Cloudflare Pages project connected to this repo.
2. Use `npm run build` as the build command.
3. Use `dist` as the build output directory.
4. Add the D1 binding named `DB`.
5. Ensure the Pages project is using the same D1 database configured in `wrangler.toml`.

### Blog Image Uploads With ImageKit

The post editor supports both:

- pasting an external image URL
- uploading an image directly to ImageKit

To enable uploads:

1. Create an ImageKit account and keep the free tier active.
2. Copy these values from the ImageKit dashboard:
   - `Public Key`
   - `Private Key`
   - `URL Endpoint`
3. Add them to your Cloudflare Pages project as secrets or variables:
   - `IMAGEKIT_PUBLIC_KEY`
   - `IMAGEKIT_PRIVATE_KEY`
   - `IMAGEKIT_URL_ENDPOINT`

Example:

- `IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id`

The upload API route stores files under `/mach-blog/covers` in ImageKit and returns the final delivery URL for the post editor to save into `cover_image_url`.

### Routing / Deep Links

SPA deep links like `/blog/my-post` and `/admin` are supported via [public/_redirects](/Users/santhosh/Downloads/mach_web-main/public/_redirects). API routes live under `/functions/api` and are served by Cloudflare Pages Functions.
### Seeded Admin

The blog now seeds a database admin account instead of bootstrapping it from environment variables.

Seeded admin:

- email: `admin@mach1.local`
- password: `ChangeMe123!`

Seeded author:

- email: `seed-author@example.com`
- password: `AuthorChangeMe123!`

Change this password immediately after first login from the admin dashboard using the built-in change password form.

### Password Changes

Any signed-in admin or author can change their own password from the admin dashboard.

API route:

- `POST /api/admin/change-password`
