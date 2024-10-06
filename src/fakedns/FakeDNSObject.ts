import { z } from 'zod';

export const FakeDNSObject = z.union([
    z.object({
        ipPool: z.string(),
        poolSize: z.number().optional(),
    }),
    z.array(
        z.object({
            ipPool: z.string(),
            poolSize: z.number().optional(),
        }),
    ),
]);

export type FakeDNSObject = z.infer<typeof FakeDNSObject>;
