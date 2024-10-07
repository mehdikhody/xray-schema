import { z } from 'zod';
import { OutboundConfigurationObject } from './OutboundConfigurationObject';

export const OutboundWireguardObject = z.object({
    protocol: z.literal('wireguard'),
    settings: OutboundConfigurationObject,
});

export type OutboundWireguardObject = z.infer<typeof OutboundWireguardObject>;
