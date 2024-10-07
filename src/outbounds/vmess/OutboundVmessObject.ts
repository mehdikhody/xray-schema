import { z } from 'zod';
import { OutboundConfigurationObject } from './OutboundConfigurationObject';

export const OutboundVmessObject = z.object({
    protocol: z.literal('vmess'),
    settings: OutboundConfigurationObject,
});

export type OutboundVmessObject = z.infer<typeof OutboundVmessObject>;
