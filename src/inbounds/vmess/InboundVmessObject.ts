import { z } from 'zod';
import { InboundConfigurationObject } from './InboundConfigurationObject';

export const InboundVmessObject = z.object({
    protocol: z.literal('vmess'),
    settings: InboundConfigurationObject,
});

export type InboundVmessObject = z.infer<typeof InboundVmessObject>;
