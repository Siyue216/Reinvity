import { z } from "zod"

export const contactSchema = z.object({
  inquiryType: z.enum(["project", "ai", "design", "consulting", "other"], {
    error: "Please select an inquiry type",
  }),
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  company: z.string().min(1, "Company name is required").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  website: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  description: z
    .string()
    .min(50, "Please provide at least 50 characters describing your project")
    .max(2000, "Description must be under 2000 characters"),
  budget: z.enum(["under5k", "5k-15k", "15k-50k", "50k+", "discuss"], {
    error: "Please select a budget range",
  }),
  timeline: z.enum(["asap", "1-3months", "3-6months", "flexible"], {
    error: "Please select a timeline",
  }),
  _gotcha: z.string().max(0).optional(),
})

export type ContactFormData = z.infer<typeof contactSchema>

export type InquiryType = ContactFormData["inquiryType"]

export const INQUIRY_TYPES: { value: InquiryType; label: string; description: string }[] = [
  { value: "project", label: "New Project / Product Build", description: "Custom software, web app, or mobile product" },
  { value: "ai", label: "AI Integration & Automation", description: "LLM integration, chatbots, workflow automation" },
  { value: "design", label: "UI/UX Design", description: "User research, design systems, prototyping" },
  { value: "consulting", label: "Technical Consulting", description: "Architecture review, tech stack advice, strategy" },
  { value: "other", label: "Other", description: "Something else? Let us know" },
]

export const BUDGET_OPTIONS = [
  { value: "under5k", label: "Under $5,000" },
  { value: "5k-15k", label: "$5,000 – $15,000" },
  { value: "15k-50k", label: "$15,000 – $50,000" },
  { value: "50k+", label: "$50,000+" },
  { value: "discuss", label: "Let's Discuss" },
] as const

export const TIMELINE_OPTIONS = [
  { value: "asap", label: "ASAP (within 1 month)" },
  { value: "1-3months", label: "1–3 months" },
  { value: "3-6months", label: "3–6 months" },
  { value: "flexible", label: "Flexible" },
] as const
