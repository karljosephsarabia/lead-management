import { z } from "zod";

const leadStatus = z.enum(["New", "Engaged", "Proposal Sent", "Closed-Won", "Closed-Lost"]);

export const NewLeadDto = z.object({
    name: z.string().trim().min(3),
    email: z.string().email(),
    status: leadStatus
});

export type LeadInput = z.infer<typeof NewLeadDto>;