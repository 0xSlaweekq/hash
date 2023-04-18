const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = 'Galaxy Wars';
const description =
    'GALAXY WARS - strategic NFT P2E Game, built on the Binance Blockchain and inspired by the Star wars universe';
const baseUri = 'ipfs://QmXPhJHnLAV76kEsKsMqAVPiyH77MSiKKH2SK8kWtf9Vzm';

const solanaMetadata = {
    // symbol: 'YC',
    // seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
    // external_url: 'https://www.youtube.com/c/hashlipsnft',
    // creators: [
    //     {
    //         address: '7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC',
    //         share: 100
    //     }
    // ]
};
const gen1 = 600;
const gen2 = 1000;
const layerConfigurations = [
    {
        growEditionSizeTo: 2250, //2250
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
        growEditionSizeTo: 2368, //118
        layersOrder: [
            { name: 'background sith' },
            { name: 'head sith' },
            { name: 'clothes sith' },
            { name: 'weapon sith' },
            { name: 'type sith' }
        ]
    },
    {
        growEditionSizeTo: 2487, //119
        layersOrder: [
            { name: 'background jedi' },
            { name: 'clothes jedi' },
            { name: 'head jedi' },
            { name: 'weapon jedi' },
            { name: 'type jedi' }
        ]
    },
    {
        growEditionSizeTo: 2500, //13
        layersOrder: [
            { name: 'background legend', options: { bypassDNA: true } },
            { name: 'body legend' },
            { name: 'type legend' }
        ]
    },
    {
        growEditionSizeTo: 5650, //3150
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
        growEditionSizeTo: 5816, //166
        layersOrder: [
            { name: 'background sith' },
            { name: 'head sith' },
            { name: 'clothes sith' },
            { name: 'weapon sith' },
            { name: 'type sith' }
        ]
    },
    {
        growEditionSizeTo: 5983, //167
        layersOrder: [
            { name: 'background jedi' },
            { name: 'clothes jedi' },
            { name: 'head jedi' },
            { name: 'weapon jedi' },
            { name: 'type jedi' }
        ]
    },
    {
        growEditionSizeTo: 6000, //17
        layersOrder: [
            { name: 'background legend', options: { bypassDNA: true } },
            { name: 'body legend' },
            { name: 'type legend' }
        ]
    },
    {
        growEditionSizeTo: 9600, //3600
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
        growEditionSizeTo: 9790, //190
        layersOrder: [
            { name: 'background sith' },
            { name: 'head sith' },
            { name: 'clothes sith' },
            { name: 'weapon sith' },
            { name: 'type sith' }
        ]
    },
    {
        growEditionSizeTo: 9980, //190
        layersOrder: [
            { name: 'background jedi' },
            { name: 'clothes jedi' },
            { name: 'head jedi' },
            { name: 'weapon jedi' },
            { name: 'type jedi' }
        ]
    },
    {
        growEditionSizeTo: 10000, //20
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
