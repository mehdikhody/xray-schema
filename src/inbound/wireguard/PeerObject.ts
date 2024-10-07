import { z } from 'zod';

export const PeerObject = z.object({
    publicKey: z.string(),
    allowedIPs: z.array(z.string()),
});

export type PeerObject = z.infer<typeof PeerObject>;
