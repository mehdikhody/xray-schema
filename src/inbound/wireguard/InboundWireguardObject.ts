import { z } from 'zod';
import { InboundConfigurationObject } from './InboundConfigurationObject';

export const InboundWireguardObject = z.object({
    protocol: z.literal('wireguard'),
    settings: InboundConfigurationObject,
});

export type InboundWireguardObject = z.infer<typeof InboundWireguardObject>;
