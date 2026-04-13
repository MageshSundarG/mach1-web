ALTER TABLE users ADD COLUMN status TEXT NOT NULL DEFAULT 'active' CHECK(status IN ('active', 'disabled'));

UPDATE users
SET status = 'active'
WHERE status IS NULL OR status = '';
