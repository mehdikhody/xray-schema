import { z } from 'zod';

export const LevelPolicyObject = z.object({
    handshake: z.number().optional(),
    connIdle: z.number().optional(),
    uplinkOnly: z.number().optional(),
    downlinkOnly: z.number().optional(),
    statsUserUplink: z.boolean().optional(),
    statsUserDownlink: z.boolean().optional(),
    bufferSize: z.number().optional(),
});

export type LevelPolicyObject = z.infer<typeof LevelPolicyObject>;
