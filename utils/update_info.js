const basePath = process.cwd();
const { NETWORK } = require(`${basePath}/constants/network.js`);
const fs = require('fs');

const { baseUri, description, namePrefix, network, solanaMetadata } = require(`${basePath}/src/config.js`);

// read json data
let rawdata = fs.readFileSync(`${basePath}/build/json/_metadata.json`);
let data = JSON.parse(rawdata);
let numNew;

data.forEach(item => {
    numNew = Number(item.edition);
    let ed = [];
    if (network == NETWORK.sol) {
        item.name = `${namePrefix} #${item.edition}`;
        item.description = description;
        item.image = `${baseUri}/${item.edition}.jpg`;
        item.creators = solanaMetadata.creators;
        item.seller_fee_basis_points = solanaMetadata.seller_fee_basis_points;
    } else {
        item.name = `${namePrefix} #${numNew}`;
        item.description = description;
        item.image = `${baseUri}/${numNew}.jpg`;
        item.edition = numNew;
    }
    fs.writeFileSync(`${basePath}/build/json/${numNew}`, JSON.stringify(item, null, 2));
});

fs.writeFileSync(`${basePath}/build/json/_metadata.json`, JSON.stringify(data, null, 2));

if (network == NETWORK.sol) {
    console.log(`Updated description for images to ===> ${description}`);
    console.log(`Updated name prefix for images to ===> ${namePrefix}`);
    console.log(`Updated creators for images to ===> ${JSON.stringify(solanaMetadata.creators)}`);
} else {
    console.log(`Updated baseUri for images to ===> ${baseUri}`);
    console.log(`Updated description for images to ===> ${description}`);
    console.log(`Updated name prefix for images to ===> ${namePrefix}`);
}
