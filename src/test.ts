import * as Xray from './index';

const inbound: Xray.Inbound.InboundObject = {
    port: 9090,
    protocol: 'vless',
    settings: {
        decryption: 'none',
        clients: [
            {
                id: '',
                email: '',
            },
        ],
        fallbacks: [
            {
                dest: '',
            },
        ],
    },
};
