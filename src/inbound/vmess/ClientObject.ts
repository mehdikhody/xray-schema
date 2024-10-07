import { z } from 'zod';

export const ClientObject = z.object({
    id: z.string().uuid(),
    level: z.number().optional(),
    email: z.string().optional(),
});

export type ClientObject = z.TypeOf<typeof ClientObject>;
