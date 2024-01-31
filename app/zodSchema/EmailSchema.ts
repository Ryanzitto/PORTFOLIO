import z from "zod";

export const createEmailSchema = z.object({
  name: z
    .string()
    .min(5, { message: "This field cannot contain less than 5 characters" })
    .max(40, { message: "This field cannot contain more than 40 characters" })
    .refine((value) => value.trim() !== "", {
      message: "The Name must not contain only white spaces.",
    }),
  email: z.string().email(),
  service: z.string(),
  message: z
    .string()
    .min(20, { message: "This field cannot contain less than 20 characters" })
    .max(100, { message: "This field cannot contain more than 100 characters" })
    .refine((value) => value.trim() !== "", {
      message: "The Name must not contain only white spaces.",
    }),
});

export type Comment = z.infer<typeof createEmailSchema>;
