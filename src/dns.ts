import { z } from 'zod';

// prettier-ignore
export const HostMap = z.record(
    z.string(), 
    z.union([z.string(), z.array(z.string())])
);

export const ServerObject = z.object({
    address: z.string(),
    port: z.number().positive(),
    domains: z.array(z.string()).optional(),
    expectIPs: z.array(z.string()).optional(),
    skipFallback: z.boolean().optional(),
    queryStrategy: z.string().optional(),
    clientIP: z.string().ip().optional(),
});

export const DnsObject = z.object({
    hosts: HostMap.optional(),
    servers: z.array(z.union([z.string(), ServerObject])),
    clientIp: z.string().ip().optional(),
    queryStrategy: z.enum(['UseIP', 'UseIPv4', 'UseIPv6']).optional(),
    disableCache: z.boolean().optional(),
    disableFallback: z.boolean().optional(),
    disableFallbackIfMatch: z.boolean().optional(),
    tag: z.string().optional(),
});

export type HostMap = z.infer<typeof HostMap>;
export type ServerObject = z.infer<typeof ServerObject>;
export type DnsObject = z.infer<typeof DnsObject>;
