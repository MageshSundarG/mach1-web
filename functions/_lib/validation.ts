import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email().max(255),
  password: z.string().min(8).max(128),
});

export const postInputSchema = z.object({
  title: z.string().trim().min(3).max(180),
  slug: z.string().trim().max(120).optional().or(z.literal("")),
  excerpt: z.string().trim().min(10).max(400),
  content_md: z.string().trim().min(20).max(100_000),
  cover_image_url: z.string().trim().url().max(2048).or(z.literal("")),
  tags: z.array(z.string().trim().min(1).max(40)).max(12),
  status: z.enum(["draft", "published"]),
});

export const userInputSchema = z.object({
  email: z.string().email().max(255),
  password: z.string().min(8).max(128),
  role: z.enum(["admin", "author"]).default("author"),
});

export const userUpdateSchema = z.object({
  email: z.string().email().max(255),
  role: z.enum(["admin", "author"]),
});

export const changePasswordSchema = z
  .object({
    old_password: z.string().min(8).max(128),
    new_password: z.string().min(8).max(128),
    confirm_password: z.string().min(8).max(128),
  })
  .superRefine((value, ctx) => {
    if (value.new_password !== value.confirm_password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["confirm_password"],
        message: "New password and confirmation must match.",
      });
    }

    if (value.old_password === value.new_password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["new_password"],
        message: "New password must be different from the old password.",
      });
    }
  });
