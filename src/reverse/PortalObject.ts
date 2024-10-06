import { z } from 'zod';

export const PortalObject = z.object({
    tag: z.string(),
    domain: z.string().optional(),
});

export type PortalObject = z.infer<typeof PortalObject>;
