import { z } from 'zod';

export const BalancerObject = z.object({
    tag: z.string(),
    selector: z.array(z.string()).optional(),
});

export type BalancerObject = z.infer<typeof BalancerObject>;
