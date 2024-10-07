import { z } from 'zod';
import { InboundConfigurationObject } from './InboundConfigurationObject';

export const InboundShadowsocksObject = z.object({
    protocol: z.literal('shadowsocks'),
    settings: InboundConfigurationObject,
});

export type InboundShadowsocksObject = z.infer<typeof InboundShadowsocksObject>;
