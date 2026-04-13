import { webcrypto } from "node:crypto";

const encoder = new TextEncoder();
const password = process.argv[2];

if (!password) {
  console.error("Usage: node scripts/hash-password.mjs \"your-password\"");
  process.exit(1);
}

function bytesToBase64(bytes) {
  return Buffer.from(bytes).toString("base64");
}

async function hashPassword(value, iterations = 100000) {
  const salt = webcrypto.getRandomValues(new Uint8Array(16));
  const key = await webcrypto.subtle.importKey("raw", encoder.encode(value), "PBKDF2", false, ["deriveBits"]);
  const bits = await webcrypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      hash: "SHA-256",
      salt,
      iterations,
    },
    key,
    256,
  );

  return `pbkdf2_sha256$${iterations}$${bytesToBase64(salt)}$${bytesToBase64(new Uint8Array(bits))}`;
}

hashPassword(password).then((hash) => {
  console.log(hash);
});
