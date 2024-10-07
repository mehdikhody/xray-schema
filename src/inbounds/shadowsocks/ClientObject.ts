import { z } from 'zod';
import { Method } from './Method';

export const ClientObject = z.object({
    method: Method.optional(),
    password: z.string(),
    level: z.number().optional(),
    email: z.string().optional(),
});

export type ClientObject = z.infer<typeof ClientObject>;
