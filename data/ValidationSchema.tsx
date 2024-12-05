import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password:z.string().min(6, { message: "Must be 6 or more characters long" })
});
export const registerSchema = z.object({
  email: z.string().email(),
  password:z.string().min(6, { message: "Must be 6 or more characters long" })
});