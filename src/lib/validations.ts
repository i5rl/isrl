import { z } from "zod";
import { CONTACT_FORM } from "@/constants";

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(
      CONTACT_FORM.maxLength.name,
      `Name cannot exceed ${CONTACT_FORM.maxLength.name} characters`,
    )
    .trim(),

  email: z
    .string()
    .email("Please enter a valid email address")
    .max(
      CONTACT_FORM.maxLength.email,
      `Email cannot exceed ${CONTACT_FORM.maxLength.email} characters`,
    )
    .toLowerCase()
    .trim(),

  subject: z
    .string()
    .max(
      CONTACT_FORM.maxLength.subject,
      `Subject cannot exceed ${CONTACT_FORM.maxLength.subject} characters`,
    )
    .trim()
    .optional(),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(
      CONTACT_FORM.maxLength.message,
      `Message cannot exceed ${CONTACT_FORM.maxLength.message} characters`,
    )
    .trim(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Newsletter Schema
export const newsletterSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(100, "Email cannot exceed 100 characters")
    .toLowerCase()
    .trim(),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

// Validation Helper Functions
export function validateContactForm(data: unknown) {
  try {
    return {
      success: true as const,
      data: contactFormSchema.parse(data),
      errors: [],
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false as const,
        data: null,
        errors: error.issues.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        })),
      };
    }

    return {
      success: false as const,
      data: null,
      errors: [{ field: "general", message: "Validation failed" }],
    };
  }
}

export function validateEmail(email: string) {
  try {
    z.string().email().parse(email);
    return { valid: true, error: null };
  } catch {
    return { valid: false, error: "Please enter a valid email address" };
  }
}
