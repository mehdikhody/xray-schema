import { z } from 'zod';

export const DetourObject = z.object({
    to: z.string(),
});

export type DetourObject = z.infer<typeof DetourObject>;
