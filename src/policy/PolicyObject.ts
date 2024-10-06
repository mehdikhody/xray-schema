import { z } from 'zod';
import { LevelPolicyObject } from './LevelPolicyObject';
import { SystemPolicyObject } from './SystemPolicyObject';

export const PolicyObject = z.object({
    levels: z.record(LevelPolicyObject).optional(),
    system: SystemPolicyObject.optional(),
});

export type PolicyObject = z.infer<typeof PolicyObject>;
