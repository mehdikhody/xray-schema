import { describe, expect, test } from 'vitest';
import { ApiObject } from 'xray-zod';

describe('ApiObject', () => {
    test('should parse and validate api object', () => {
        const api_config = {
            tag: 'api',
            services: [
                'HandlerService',
                'LoggerService',
                'StatsService',
                'RoutingService',
                'ReflectionService',
            ],
        };

        const result = ApiObject.safeParse(api_config);
        expect(result.success).toBe(true);
        expect(api_config).toEqual(result.data);
    });
});
