const encoder = new TextEncoder();
const MAX_PBKDF2_ITERATIONS = 100_000;

function bytesToBase64(bytes: Uint8Array) {
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

function base64ToBytes(value: string) {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

async function deriveBits(password: string, salt: Uint8Array, iterations: number) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  );

  const bits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      hash: "SHA-256",
      salt,
      iterations,
    },
    key,
    256,
  );

  return new Uint8Array(bits);
}

export async function hashPassword(password: string, iterations = MAX_PBKDF2_ITERATIONS) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const hash = await deriveBits(password, salt, iterations);
  return `pbkdf2_sha256$${iterations}$${bytesToBase64(salt)}$${bytesToBase64(hash)}`;
}

export async function verifyPassword(password: string, storedHash: string) {
  const [algorithm, iterationsValue, saltValue, hashValue] = storedHash.split("$");

  if (algorithm !== "pbkdf2_sha256" || !iterationsValue || !saltValue || !hashValue) {
    return false;
  }

  const iterations = Number(iterationsValue);
  if (!Number.isFinite(iterations) || iterations < 1 || iterations > MAX_PBKDF2_ITERATIONS) {
    return false;
  }

  const salt = base64ToBytes(saltValue);
  const expectedHash = base64ToBytes(hashValue);
  const actualHash = await deriveBits(password, salt, iterations);

  if (expectedHash.length !== actualHash.length) {
    return false;
  }

  let diff = 0;
  for (let index = 0; index < expectedHash.length; index += 1) {
    diff |= expectedHash[index] ^ actualHash[index];
  }

  return diff === 0;
}
