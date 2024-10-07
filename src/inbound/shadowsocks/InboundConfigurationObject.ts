import { z } from 'zod';
import { ClientObject } from './ClientObject';
import { Method } from './Method';

export const InboundConfigurationObject = z.object({
    clients: z.array(ClientObject).optional(),
    password: z.string(),
    method: Method,
    level: z.number().optional(),
    email: z.string().optional(),
    network: z.enum(['tcp', 'udp', 'tcp,udp']).optional(),
});

export type InboundConfigurationObject = z.infer<typeof InboundConfigurationObject>;
