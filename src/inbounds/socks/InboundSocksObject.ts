import { z } from 'zod';
import { InboundConfigurationObject } from './InboundConfigurationObject';

export const InboundSocksObject = z.object({
    protocol: z.literal('socks'),
    settings: InboundConfigurationObject,
});

export type InboundSocksObject = z.infer<typeof InboundSocksObject>;
