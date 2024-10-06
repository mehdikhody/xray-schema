import { z } from 'zod';
import { RuleObject } from './RuleObject';
import { BalancerObject } from './BalancerObject';

export const RoutingObject = z.object({
    domainStrategy: z.enum(['AsIs', 'IPIfNonMatch', 'IPOnDemand']).optional(),
    domainMatcher: z.enum(['hybrid', 'linear']).optional(),
    rules: z.array(RuleObject).optional(),
    balancers: z.array(BalancerObject).optional(),
});

export type RoutingObject = z.infer<typeof RoutingObject>;
