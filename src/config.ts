import { z } from 'zod';
import { LogObject } from './log';
import { ApiObject } from './api';
import { DnsObject } from './dns';

export const ConfigObject = z.object({
    log: LogObject.optional(),
    api: ApiObject.optional(),
    dns: DnsObject.optional(),
    routing: z.object({}),
    policy: z.object({}),
    inbounds: z.object({}),
    outbounds: z.object({}),
    transport: z.object({}),
    stats: z.object({}),
    reverse: z.object({}),
    fakedns: z.object({}),
    metrics: z.object({}),
    observatory: z.object({}),
    burstObservatory: z.object({}),
});

export type ConfigObject = z.infer<typeof ConfigObject>;
