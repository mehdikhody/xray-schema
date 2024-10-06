import { z } from 'zod';

export const StatsObject = z.object({});

export type StatsObject = z.infer<typeof StatsObject>;
