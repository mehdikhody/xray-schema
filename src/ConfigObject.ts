import { z } from 'zod';
import { LogObject } from './log';
import { ApiObject } from './api';
import { DnsObject } from './dns';
import { RoutingObject } from './routing';
import { PolicyObject } from './policy';
import { StatsObject } from './stats';
import { ReverseObject } from './reverse';
import { FakeDNSObject } from './fakedns';
import { MetricsObject } from './metrics';
import { ObservatoryObject } from './observatory';
import { BurstObservatoryObject } from './burstObservatory';

export const ConfigObject = z.object({
    log: LogObject.optional(),
    api: ApiObject.optional(),
    dns: DnsObject.optional(),
    routing: RoutingObject.optional(),
    policy: PolicyObject.optional(),
    stats: StatsObject.optional(),
    reverse: ReverseObject.optional(),
    fakedns: FakeDNSObject.optional(),
    metrics: MetricsObject.optional(),
    observatory: ObservatoryObject.optional(),
    burstObservatory: BurstObservatoryObject.optional(),
});

export type ConfigObject = z.infer<typeof ConfigObject>;
