const basePath = process.cwd();
const fs = require('fs');
const layersDir = `${basePath}/layers`;

const { baseUri, layerConfigurations } = require(`${basePath}/src/config.js`);

const { getElements } = require('../src/main.js');

// read json data
let data = JSON.parse(fs.readFileSync(`${basePath}/build/json/_metadata.json`));
let editionSize = data.length;

let rarityData = [];
let silver = [];
let gold = [];

// const newData = data.map(obj => {
//     // let alpha = [];
//     // let atrib = [];
//     let type = '';
//     let img = '';
//     // obj.attributes.map(x => {
//     //     for (var i = 0; i < obj.attributes.length; i++) {
//     //         atrib[i] = obj.attributes[i];
//     //     }
//     // });
//     obj.attributes.forEach(obj => {
//         let traitType = obj.trait_type;
//         // let value = obj.value;
//         if (traitType == 'Bronze') {
//             type += 'Bronze';
//         }
//         if (traitType == 'Silver') {
//             type += 'Silver';
//         }
//         if (traitType == 'Gold') {
//             type += 'Gold';
//         }
//     });
//     if (obj.type == 'Bronze') {
//         img = `${baseUri}/1.gif`;
//     }
//     if (obj.type == 'Silver') {
//         img = `${baseUri}/2.gif`;
//         silver.push(obj.edition);
//     }
//     if (obj.type == 'Gold') {
//         img = `${baseUri}/3.gif`;
//         gold.push(obj.edition);
//     }

//     // for (var i = 0; i < obj.attributes.length; i++) {
//     //     if (atrib[i].rarity != 100) {
//     //         alpha[i] = 100 - Number(atrib[i].rarity);
//     //         score += (alpha[i] / obj.attributes.length) * 100;
//     //     }
//     // }

//     return {
//         name: obj.name,
//         // symbol: obj.symbol,
//         description: obj.description,
//         image: img,
//         edition: obj.edition,
//         dna: obj.dna,
//         type: type
//         // score: n4.format(score),
//         // attributes: obj.attributes.map((x) => {
//         //     return {
//         //         ...x,
//         //         // rarity: rarityData[x.trait_type].find(
//         //         //     (l) => x.value === l.trait
//         //         // ).occurrence,
//         //         rarity: rarityData[x.trait_type].find(
//         //             (l) => x.value === l.trait
//         //         ).chance,
//         //     };
//         // }),
//         // creators: obj.creators,
//         // seller_fee_basis_points: obj.seller_fee_basis_points,
//     };
// });

console.log('Silver: ', silver);
console.log('Gold: ', gold);

let numNew;

data.forEach(obj => {
    numNew = Number(obj.edition);
    obj.name = obj.name;
    obj.description = obj.description;
    obj.image = `ipfs://${obj.image}`;
    obj.edition = numNew;
    fs.writeFileSync(`${basePath}/build/json/${numNew}`, JSON.stringify(obj, null, 2));
});
// fs.writeFileSync(`${basePath}/build/json/_metadata.json`, JSON.stringify(newData, null, 2));
