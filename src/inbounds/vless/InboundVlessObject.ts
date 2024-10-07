import { z } from 'zod';
import { InboundConfigurationObject } from './InboundConfigurationObject';

export const InboundVlessObject = z.object({
    protocol: z.literal('vless'),
    settings: InboundConfigurationObject,
});

export type InboundVlessObject = z.infer<typeof InboundVlessObject>;
