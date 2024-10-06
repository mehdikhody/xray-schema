import { z } from 'zod';

export const HTTPRequestObject = z.object({
    version: z.string().optional(),
    method: z.string().optional(),
    path: z.array(z.string()).optional(),
    headers: z.record(z.array(z.string())).optional(),
});

export type HTTPRequestObject = z.infer<typeof HTTPRequestObject>;
