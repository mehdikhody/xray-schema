# `xray-zod`

`xray-zod` is a TypeScript library designed to validate and parse XRAY configuration using the zod library. It provides type definitions and validation schemas based on the official ProjectX documentation.

## Installation

To install `xray-zod`, run:

```bash
npm install zod xray-zod
```

## Usage

### Parsing and Validating XRAY Config

To parse and validate your XRAY configuration, use the `ConfigObject`:

```typescript
import { ConfigObject } from 'xray-zod';

try {
    const config = {};
    ConfigObject.parse(config);
} catch (err) {
    // handle error
}
```

### Type Definitions

You can also use the types defined in `xray-zod` for type safety:

```typescript
import type * as Xray from 'xray-zod';

const log_config: Xray.LogObject = {
    loglevel: 'info',
    access: './access.log',
};

const api_config: Xray.ApiObject = {
    services: ['LoggerService', 'StatsService'],
    tag: 'api',
};

// Example configuration object
const config: Xray.ConfigObject = {
    log: log_config,
    api: api_config,
    inbounds: [
        {
            listen: '127.0.0.1',
            port: 62789,
            protocol: 'dokodemo-door',
            settings: {
                address: '127.0.0.1',
            },
            tag: 'api',
        },
    ],
    outbounds: [
        {
            protocol: 'freedom',
            settings: {},
            tag: 'direct',
        },
        {
            protocol: 'blackhole',
            settings: {},
            tag: 'blocked',
        },
    ],
    routing: {
        rules: [
            {
                inboundTag: ['api'],
                outboundTag: 'api',
                type: 'field',
            },
        ],
    },
    stats: {},
};
```

For more information, refer to the official ProjectX documentation:
<br>
[ProjectX Documentation](https://xtls.github.io/en/config/)
