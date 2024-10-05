import jwt from "jsonwebtoken";

export async function generateToken(payload: {
  firstname: string;
  lastname: string;
  email: string;
}) {
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: "1h",
  });
}

export async function verifyToken(token: string) {
  return jwt.verify(token, process.env.JWT_SECRET as string);
}
