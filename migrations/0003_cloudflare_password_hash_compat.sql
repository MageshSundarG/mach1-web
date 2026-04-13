UPDATE users
SET
  password_hash = 'pbkdf2_sha256$100000$aprX3uUPCly3rXjPpRLfOg==$Uf/mQfwld0+EhdiZuBudxjFqATJ5U15n5hU2EnBLM2c=',
  updated_at = '2026-04-04T04:10:00.000Z'
WHERE id = 'seed-admin';

UPDATE users
SET
  password_hash = 'pbkdf2_sha256$100000$L0nKDm+50AhQrId2gsn5YA==$Ogd9QARfOAkCGLDt0MOAR4b9cGmJUoe2yrxU0yQancg=',
  updated_at = '2026-04-04T04:10:00.000Z'
WHERE id = 'seed-author';
