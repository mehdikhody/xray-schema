import { z } from 'zod';

export const ClientObject = z.object({
    password: z.string(),
    email: z.string().optional(),
    level: z.number().optional(),
});

export type ClientObject = z.infer<typeof ClientObject>;
