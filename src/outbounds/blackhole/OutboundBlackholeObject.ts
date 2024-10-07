import { z } from 'zod';
import { OutboundConfigurationObject } from './OutboundConfigurationObject';

export const OutboundBlackholeObject = z.object({
    protocol: z.literal('blackhole'),
    settings: OutboundConfigurationObject,
});

export type OutboundBlackholeObject = z.infer<typeof OutboundBlackholeObject>;
