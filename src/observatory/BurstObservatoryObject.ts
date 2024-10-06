import { z } from 'zod';
import { PingConfigObject } from './PingConfigObject';

export const BurstObservatoryObject = z.object({
    subjectSelector: z.array(z.string()),
    pingConfig: PingConfigObject.optional(),
});

export type BurstObservatoryObject = z.infer<typeof BurstObservatoryObject>;
