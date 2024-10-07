import { z } from 'zod';
import { InboundConfigurationObject } from './InboundConfigurationObject';

export const InboundHttpObject = z.object({
    protocol: z.literal('http'),
    settings: InboundConfigurationObject,
});

export type InboundHttpObject = z.infer<typeof InboundHttpObject>;
