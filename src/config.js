const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = 'BABYX';
const description =
    'BABYX - it is a reward token with unusual mechanics, built specifically for the community and managed entirely by it, with unique utility properties and features';
const baseUri = 'ipfs://Qmd7U7SbighEnoy5hwmMRu8XsGLak31ujL1cWxsDGm339n';

const solanaMetadata = {
    symbol: 'YC',
    seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
    external_url: 'https://www.youtube.com/c/hashlipsnft',
    creators: [
        {
            address: '7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC',
            share: 100
        }
    ]
};
const gen1 = 600;
const gen2 = 1000;
const layerConfigurations = [
    // {
    //     growEditionSizeTo: 30, //30
    //     layersOrder: [
    //         { name: 'background trooper' },
    //         { name: 'body trooper' },
    //         { name: 'bodycolour trooper' },
    //         { name: 'headcolour trooper' },
    //         { name: 'gun trooper' },
    //         { name: 'Gold' }
    //     ]
    // },
    // {
    //     growEditionSizeTo: 190, //160
    //     layersOrder: [
    //         { name: 'background trooper' },
    //         { name: 'body trooper' },
    //         { name: 'bodycolour trooper' },
    //         { name: 'headcolour trooper' },
    //         { name: 'gun trooper' },
    //         { name: 'Silver' }
    //     ]
    // },
    // {
    //     growEditionSizeTo: 630, //440
    //     layersOrder: [
    //         { name: 'background trooper' },
    //         { name: 'body trooper' },
    //         { name: 'bodycolour trooper' },
    //         { name: 'headcolour trooper' },
    //         { name: 'gun trooper' },
    //         { name: 'Bronze' }
    //     ]
    // },
    // {
    //     growEditionSizeTo: 680, //50
    //     layersOrder: [
    //         { name: 'background trooper' },
    //         { name: 'body trooper' },
    //         { name: 'bodycolour trooper' },
    //         { name: 'headcolour trooper' },
    //         { name: 'gun trooper' },
    //         { name: 'Gold' }
    //     ]
    // },
    // {
    //     growEditionSizeTo: 850, //170
    //     layersOrder: [
    //         { name: 'background trooper' },
    //         { name: 'body trooper' },
    //         { name: 'bodycolour trooper' },
    //         { name: 'headcolour trooper' },
    //         { name: 'gun trooper' },
    //         { name: 'Silver' }
    //     ]
    // },
    // {
    //     growEditionSizeTo: 1320, //470
    //     layersOrder: [
    //         { name: 'background trooper' },
    //         { name: 'body trooper' },
    //         { name: 'bodycolour trooper' },
    //         { name: 'headcolour trooper' },
    //         { name: 'gun trooper' },
    //         { name: 'Bronze' }
    //     ]
    // },
    // {
    //     growEditionSizeTo: 1360, //40
    //     layersOrder: [
    //         { name: 'background trooper' },
    //         { name: 'body trooper' },
    //         { name: 'bodycolour trooper' },
    //         { name: 'headcolour trooper' },
    //         { name: 'gun trooper' },
    //         { name: 'Gold' }
    //     ]
    // },
    // {
    //     growEditionSizeTo: 1530, //170
    //     layersOrder: [
    //         { name: 'background trooper' },
    //         { name: 'body trooper' },
    //         { name: 'bodycolour trooper' },
    //         { name: 'headcolour trooper' },
    //         { name: 'gun trooper' },
    //         { name: 'Silver' }
    //     ]
    // },
    // {
    //     growEditionSizeTo: 2000, //470
    //     layersOrder: [
    //         { name: 'background trooper' },
    //         { name: 'body trooper' },
    //         { name: 'bodycolour trooper' },
    //         { name: 'headcolour trooper' },
    //         { name: 'gun trooper' },
    //         { name: 'Bronze' }
    //     ]
    // }
    {
        growEditionSizeTo: 2500,
        layersOrder: [
            { name: 'background legend', options: { bypassDNA: true } },
            { name: 'body legend' },
            { name: 'type legend' }
        ]
    },
    {
        growEditionSizeTo: 5650,
        layersOrder: [
            { name: 'background trooper' },
            { name: 'body trooper' },
            { name: 'bodycolour trooper' },
            { name: 'headcolour trooper' },
            { name: 'gun trooper' },
            { name: 'type' }
        ]
    },
    {
        growEditionSizeTo: 5816,
        layersOrder: [
            { name: 'background sith' },
            { name: 'head sith' },
            { name: 'clothes sith' },
            { name: 'weapon sith' },
            { name: 'type sith' }
        ]
    },
    {
        growEditionSizeTo: 5983,
        layersOrder: [
            { name: 'background jedi' },
            { name: 'clothes jedi' },
            { name: 'head jedi' },
            { name: 'weapon jedi' },
            { name: 'type jedi' }
        ]
    },
    {
        growEditionSizeTo: 6000,
        layersOrder: [
            { name: 'background legend', options: { bypassDNA: true } },
            { name: 'body legend' },
            { name: 'type legend' }
        ]
    },
    {
        growEditionSizeTo: 9600,
        layersOrder: [
            { name: 'background trooper' },
            { name: 'body trooper' },
            { name: 'bodycolour trooper' },
            { name: 'headcolour trooper' },
            { name: 'gun trooper' },
            { name: 'type' }
        ]
    },
    {
        growEditionSizeTo: 9790,
        layersOrder: [
            { name: 'background sith' },
            { name: 'head sith' },
            { name: 'clothes sith' },
            { name: 'weapon sith' },
            { name: 'type sith' }
        ]
    },
    {
        growEditionSizeTo: 9980,
        layersOrder: [
            { name: 'background jedi' },
            { name: 'clothes jedi' },
            { name: 'head jedi' },
            { name: 'weapon jedi' },
            { name: 'type jedi' }
        ]
    },
    {
        growEditionSizeTo: 10000,
        layersOrder: [
            { name: 'background legend', options: { bypassDNA: true } },
            { name: 'body legend' },
            { name: 'type legend' }
        ]
    }
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
    width: 256,
    height: 256,
    smoothing: false
};

const gif = {
    export: false,
    repeat: 0,
    quality: 100,
    delay: 500
};

const text = {
    only: false,
    color: '#ffffff',
    size: 20,
    xGap: 40,
    yGap: 40,
    align: 'left',
    baseline: 'top',
    weight: 'regular',
    family: 'Courier',
    spacer: ' => '
};

const pixelFormat = {
    ratio: 1 / 128
};

const background = {
    generate: true,
    brightness: '80%',
    static: false,
    default: '#000000'
};

const extraMetadata = {};

const rarityDelimiter = '#';

const uniqueDnaTorrance = 10000;

const preview = {
    thumbPerRow: 5,
    thumbWidth: 50,
    imageRatio: format.height / format.width,
    imageName: 'preview.png'
};

const preview_gif = {
    numberOfImages: 5,
    order: 'ASC', // ASC, DESC, MIXED
    repeat: 0,
    quality: 100,
    delay: 500,
    imageName: 'preview.gif'
};

module.exports = {
    format,
    baseUri,
    description,
    background,
    uniqueDnaTorrance,
    layerConfigurations,
    rarityDelimiter,
    preview,
    shuffleLayerConfigurations,
    debugLogs,
    extraMetadata,
    pixelFormat,
    text,
    namePrefix,
    network,
    solanaMetadata,
    gif,
    preview_gif,
    gen1,
    gen2
};
