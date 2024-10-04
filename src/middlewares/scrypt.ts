import { scrypt, randomBytes, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

const scryptAsync = promisify(scrypt);

const KEY_LENGTH = 64;
const SALT_LENGTH = 16;

export async function hashPassword(password: string): Promise<string> {
  if (!password) {
    throw new Error("Password is required");
  }
  try {
    const salt = randomBytes(SALT_LENGTH).toString("hex");
    const buffer = (await scryptAsync(password, salt, KEY_LENGTH)) as Buffer;
    return `${buffer.toString("hex")}.${salt}`;
  } catch (error) {
    throw new Error("Error hashing password");
  }
}

export async function verifyPassword(
  hashedPassword: string,
  password: string,
): Promise<boolean> {
  if (!hashedPassword || !password) {
    throw new Error("Invalid input");
  }
  try {
    const [hash, salt] = hashedPassword.split(".");
    const buffer = (await scryptAsync(password, salt, KEY_LENGTH)) as Buffer;
    return timingSafeEqual(Buffer.from(hash), buffer);
  } catch (error) {
    throw new Error("Error verifying password");
  }
}
