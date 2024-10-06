import { z } from 'zod';

export const BridgeObject = z.object({
    tag: z.string(),
    domain: z.string().optional(),
});

export type BridgeObject = z.infer<typeof BridgeObject>;
