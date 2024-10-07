import { z } from 'zod';

export const AllocateObject = z.object({
    strategy: z.enum(['always', 'random']).optional(),
    refresh: z.number().optional(),
    concurrency: z.number().optional(),
});

export type AllocateObject = z.infer<typeof AllocateObject>;
