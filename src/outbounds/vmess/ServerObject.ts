import { z } from 'zod';
import { UserObject } from './UserObject';

export const ServerObject = z.object({
    address: z.string(),
    port: z.number(),
    users: z.array(UserObject),
});

export type ServerObject = z.infer<typeof ServerObject>;
