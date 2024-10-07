import { z } from 'zod';
import { FragmentObject } from './FragmentObject';
import { NoiseObject } from './NoiseObject';

export const OutboundConfigurationObject = z.object({
    domainStrategy: z.enum(['AsIs', 'UseIP', 'UseIPv4', 'UseIPv6']).optional(),
    redirect: z.string().optional(),
    userLevel: z.number().optional(),
    fragment: FragmentObject.optional(),
    noises: z.array(NoiseObject).optional(),
    proxyProtocol: z.number().optional(),
});

export type OutboundConfigurationObject = z.infer<typeof OutboundConfigurationObject>;
