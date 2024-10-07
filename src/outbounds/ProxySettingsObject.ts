import { z } from 'zod';

export const ProxySettingsObject = z.object({
    tag: z.string(),
});

export type ProxySettingsObject = z.infer<typeof ProxySettingsObject>;
