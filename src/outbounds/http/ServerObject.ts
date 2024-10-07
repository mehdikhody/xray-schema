import { z } from 'zod';
import { AccountObject } from './AccountObject';

export const ServerObject = z.object({
    address: z.string(),
    port: z.number(),
    users: z.array(AccountObject).optional(),
});

export type ServerObject = z.infer<typeof ServerObject>;
