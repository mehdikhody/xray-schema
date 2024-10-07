import { z } from 'zod';

export const DefaultObject = z.object({
    level: z.number().optional(),
});

export type DefaultObject = z.infer<typeof DefaultObject>;
