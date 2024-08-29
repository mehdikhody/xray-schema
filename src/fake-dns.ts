import { z } from 'zod';

export const FakeDNSObject = z.object({
    ipPool: z.string(),
    poolSize: z.number().optional(),
});

export type FakeDNSObject = z.infer<typeof FakeDNSObject>;
