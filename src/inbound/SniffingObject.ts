import { z } from 'zod';

export const SniffingObject = z.object({
    enabled: z.boolean().optional(),
    destOverride: z.array(z.enum(['http', 'tls', 'quic', 'fakedns', 'fakedns+others'])).optional(),
    metadataOnly: z.boolean().optional(),
    domainsExcluded: z.array(z.string()).optional(),
    routeOnly: z.boolean().optional(),
});

export type SniffingObject = z.infer<typeof SniffingObject>;
