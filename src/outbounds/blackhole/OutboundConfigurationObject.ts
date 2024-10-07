import { z } from 'zod';
import { ResponseObject } from './ResponseObject';

export const OutboundConfigurationObject = z.object({
    response: ResponseObject.optional(),
});

export type OutboundConfigurationObject = z.infer<typeof OutboundConfigurationObject>;
