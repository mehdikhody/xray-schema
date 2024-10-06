import { z } from 'zod';

export const HeaderObject = z.object({
    type: z.enum(['none', 'srtp', 'utp', 'wechat-video', 'dtls', 'wireguard']).optional(),
});

export type HeaderObject = z.infer<typeof HeaderObject>;
