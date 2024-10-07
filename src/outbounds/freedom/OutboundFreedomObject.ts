import { z } from 'zod';
import { OutboundConfigurationObject } from './OutboundConfigurationObject';

export const OutboundFreedomObject = z.object({
    protocol: z.literal('freedom'),
    settings: OutboundConfigurationObject,
});

export type OutboundFreedomObject = z.infer<typeof OutboundFreedomObject>;
