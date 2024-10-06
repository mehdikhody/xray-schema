import { z } from 'zod';

export const WebSocketObject = z.object({
    acceptProxyProtocol: z.boolean().optional(),
    path: z.string().optional(),
    host: z.string().optional(),
    headers: z.record(z.string()).optional(),
});

export type WebSocketObject = z.infer<typeof WebSocketObject>;
