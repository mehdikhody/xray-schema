import { describe, expect, test } from 'vitest';
import { LogObject } from 'xray-zod';

describe('LogObject', () => {
    test('should parse and validate log object', () => {
        const log_config = {
            access: 'none',
            error: 'none',
            loglevel: 'none',
            dnsLog: true,
            maskAddress: 'quarter',
        };

        const result = LogObject.safeParse(log_config);
        expect(result.success).toBe(true);
        expect(log_config).toEqual(result.data);
    });
});
