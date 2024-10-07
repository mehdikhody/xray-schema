import { z } from 'zod';

export const InboundConfigurationObject = z.object({
    address: z.string(),
    port: z.number().min(1).max(65535),
    network: z.enum(['tcp', 'udp', 'tcp,udp']).optional(),
    followRedirect: z.boolean().optional(),
    userLevel: z.number().optional(),
});

export type InboundConfigurationObject = z.infer<typeof InboundConfigurationObject>;
