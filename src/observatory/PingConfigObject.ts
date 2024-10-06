import { z } from 'zod';

export const PingConfigObject = z.object({
    destination: z.string(),
    connectivity: z.string(),
    interval: z.string(),
    sampling: z.number(),
    timeout: z.string(),
});

export type PingConfigObject = z.TypeOf<typeof PingConfigObject>;
