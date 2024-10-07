import { z } from 'zod';
import { OutboundConfigurationObject } from './OutboundConfigurationObject';

export const OutboundDnsObject = z.object({
    protocol: z.literal('dns'),
    settings: OutboundConfigurationObject,
});

export type OutboundDnsObject = z.infer<typeof OutboundDnsObject>;
