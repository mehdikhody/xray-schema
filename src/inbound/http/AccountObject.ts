import { z } from 'zod';

export const AccountObject = z.object({
    user: z.string(),
    pass: z.string(),
});

export type AccountObject = z.infer<typeof AccountObject>;
