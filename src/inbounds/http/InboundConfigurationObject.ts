import { z } from 'zod';
import { AccountObject } from './AccountObject';

export const InboundConfigurationObject = z.object({
    accounts: z.array(AccountObject).optional(),
    allowTransparent: z.boolean().optional(),
    userLevel: z.number().optional(),
});

export type InboundConfigurationObject = z.infer<typeof InboundConfigurationObject>;
