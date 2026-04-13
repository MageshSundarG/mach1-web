INSERT INTO users (
  id,
  email,
  password_hash,
  role,
  created_at,
  updated_at
)
VALUES (
  'seed-author',
  'seed-author@example.com',
  'pbkdf2_sha256$100000$L0nKDm+50AhQrId2gsn5YA==$Ogd9QARfOAkCGLDt0MOAR4b9cGmJUoe2yrxU0yQancg=',
  'author',
  '2026-04-02T09:00:00.000Z',
  '2026-04-02T09:00:00.000Z'
)
ON CONFLICT(id) DO NOTHING;

INSERT INTO users (
  id,
  email,
  password_hash,
  role,
  created_at,
  updated_at
)
VALUES (
  'seed-admin',
  'admin@mach1.local',
  'pbkdf2_sha256$100000$aprX3uUPCly3rXjPpRLfOg==$Uf/mQfwld0+EhdiZuBudxjFqATJ5U15n5hU2EnBLM2c=',
  'admin',
  '2026-04-02T09:00:00.000Z',
  '2026-04-02T09:00:00.000Z'
)
ON CONFLICT(id) DO NOTHING;

INSERT INTO posts (
  id,
  author_id,
  title,
  slug,
  excerpt,
  content_md,
  cover_image_url,
  tags,
  status,
  created_at,
  updated_at,
  published_at
)
VALUES
  (
    'seed-post-1',
    'seed-author',
    'The Next Frontier of AI-Powered Airport Operations',
    'ai-powered-airport-operations',
    'Why modern airports are moving from fragmented tools to one intelligent operating layer built for safety, visibility, and response.',
    '# The Next Frontier of AI-Powered Airport Operations

Airport teams are under pressure to move faster without losing control.

Modern operations platforms do more than collect incidents and reports. They connect maintenance, safety, weather context, inspections, communication, and response workflows into a single operating picture.

- Better visibility
- Faster decisions
- Less manual coordination',
    '/assets/home/session7/1.png',
    '["operations","ai","safety"]',
    'published',
    '2026-04-02T10:00:00.000Z',
    '2026-04-02T10:00:00.000Z',
    '2026-04-02T10:00:00.000Z'
  ),
  (
    'seed-post-2',
    'seed-author',
    'Predictive Safety Systems Are Changing How Airports Respond',
    'predictive-safety-systems-for-airports',
    'From hazard signals to live decision support, predictive systems are helping airport leaders intervene earlier and operate with more confidence.',
    '# Predictive Safety Systems

Traditional safety systems are excellent at recording what happened.

The next generation helps teams understand what is likely to happen next, so they can act sooner and with more confidence.',
    '/assets/home/session7/2.png',
    '["safety","predictive","leadership"]',
    'published',
    '2026-04-02T11:00:00.000Z',
    '2026-04-02T11:00:00.000Z',
    '2026-04-02T11:00:00.000Z'
  );
