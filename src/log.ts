import { z } from 'zod';

export const LogObject = z.object({
    loglevel: z.enum(['debug', 'info', 'warning', 'error', 'none']),
    access: z.string().optional(),
    error: z.string().optional(),
    dnsLog: z.boolean().optional(),
});

export type LogObject = z.infer<typeof LogObject>;
