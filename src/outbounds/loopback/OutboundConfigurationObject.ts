import { z } from 'zod';

export const OutboundConfigurationObject = z.object({
    inboundTag: z.string(),
});

export type OutboundConfigurationObject = z.infer<typeof OutboundConfigurationObject>;
