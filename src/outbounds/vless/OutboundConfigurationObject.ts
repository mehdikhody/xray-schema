import { z } from 'zod';
import { ServerObject } from './ServerObject';

export const OutboundConfigurationObject = z.object({
    vnext: z.array(ServerObject),
});

export type OutboundConfigurationObject = z.infer<typeof OutboundConfigurationObject>;
