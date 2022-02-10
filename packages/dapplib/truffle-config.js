require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give prison obtain suggest name rescue mad equip just arena army gate'; 
let testAccounts = [
"0x298c32abfc803c6c9a7660cebc1e193001f6a83d8a43f505239d782e47c6da49",
"0x3f204a989d7c38c8945c8bdcfb38afc48193a890764e44968461c5b6e34ffa0c",
"0xcf546f439402ee62f00977130fa7e349ec7efcef98acc6c204fd574dac3d1215",
"0x881d2a9421cb0f2e3d41183437cd0fa1e21c93762d71868b463ca65463521099",
"0x61bb2ea004fe6e4f5d093250bf50a7a9d4c1b3653e490d2f7fe6d8904e7906c9",
"0x744087b552ec50472f3e2b50b2cce8ea6f33764562eb050d6e24fe6f7302ac35",
"0x89ba99b397dbadde64f38bbafced28dfac3a01a43b60efbfd712073ae0b1cfbf",
"0x8f0c25ad8827f89eaf6e7930322a2f975eb02965af6d5b9ee5674dd068d13a69",
"0x067a17e095486b559dad8c52e19db4944c2823b6a14649d633ea447fc4b27fca",
"0xb7c663f97002ecfdb435e9cf301f8f72bdc9423d1d853da035adde537df37644"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

