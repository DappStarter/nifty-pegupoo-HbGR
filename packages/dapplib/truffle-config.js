require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enroll other venture strike crawl oven puppy hunt kangaroo army gate'; 
let testAccounts = [
"0x5ca7b815dd72ae7ed942c3ff5e433b07034340384a8c23f2d26b32c0673fe72f",
"0x0372815dd560b5d9b638c00598a173ca9d8725e80e9fb160fb7b1bbb2e2a9962",
"0xda7e371e0c00012be82a05f798f6e0e0516b0e402ed0bfca619e86ad2a547331",
"0x684586713b091fc6e7a0f9075ff2020f19a6975d7e806e7110cad434e093dd8a",
"0xdceb730832d02dec5c940588c119ce8e65ce7762db02f84b30a2be7bded7c57b",
"0x9c10c731619b248fcaadd12b911784d0676587f41785f3c8bf865752d4bfe4ad",
"0x484f511c531d6843466917c2431a82546e1a1ebaebdd6345be9fab1fd79f5571",
"0xfe77ba77bef1b1dffbcabd9ee9c896a8fc53b63ce4ac507e55b1466e0a824deb",
"0x2c0e9d5f83ba46a6afb542cbae2c6736632568d921243940029081423f062d82",
"0x89898a11edf6f6b57e91486c4576533cc4087b97e6399e746a10505cffe599fb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

