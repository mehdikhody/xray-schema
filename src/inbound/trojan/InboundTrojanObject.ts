import { z } from 'zod';
import { InboundConfigurationObject } from './InboundConfigurationObject';

export const InboundTrojanObject = z.object({
    protocol: z.literal('trojan'),
    settings: InboundConfigurationObject,
});

export type InboundTrojanObject = z.infer<typeof InboundTrojanObject>;
