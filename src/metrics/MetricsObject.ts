import { z } from 'zod';

export const MetricsObject = z.object({
    tag: z.string(),
});

export type MetricsObject = z.infer<typeof MetricsObject>;
