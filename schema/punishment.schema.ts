import { z } from "zod";

export const punishmentSchema = z.object({
    id: z.number().int(),
    punishment_amount: z.number().int(),
    punishment_count: z.number().int(),
});

export type PunishmentSchemaType = z.infer<typeof punishmentSchema>;