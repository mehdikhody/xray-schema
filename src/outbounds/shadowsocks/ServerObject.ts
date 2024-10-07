import { z } from 'zod';
import { Method } from './Method';

export const ServerObject = z.object({
    email: z.string().optional(),
    address: z.string(),
    port: z.number(),
    method: Method,
    password: z.string(),
    uot: z.boolean().optional(),
    level: z.number().optional(),
});

export type ServerObject = z.infer<typeof ServerObject>;
