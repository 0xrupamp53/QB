import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  full_name: z.string().trim().min(1).max(100),
  work_email: z.string().trim().email().max(255),
  company: z.string().trim().max(150).optional().default(""),
  need: z.string().trim().min(1).max(100),
  budget: z.string().trim().min(1).max(100),
  brief: z.string().trim().min(1).max(4000),
  consent: z.literal(true),
});

export type LeadInput = z.input<typeof leadSchema>;

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("leads").insert({
      full_name: data.full_name,
      work_email: data.work_email,
      company: data.company || null,
      need: data.need,
      budget: data.budget,
      brief: data.brief,
      consent: data.consent,
    });
    if (error) throw new Error("Could not save your brief. Please email info@qbprosupportservices.com.");
    return { ok: true as const };
  });
