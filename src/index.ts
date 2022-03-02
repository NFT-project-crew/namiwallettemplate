declare const window: any;

import { NamiWalletApi } from 'nami-wallet-api'
import * as WASM_lib from '@emurgo/cardano-serialization-lib-browser'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import 'jquery';
import './css/cover.css'
window.$ = window.jQuery = import("jquery");
import 'bootstrap/js/dropdown.js';

const sendData = {
    address: 'addr1q8xad22u7qzty4lkk9dn82yftducmhtwm9werqhre0pu33rl22r6cayugnut29cktg675c9q59jeqje9mg5hf8frvmjqnzgp4l',
    amount: 5
}

const Nami = await NamiWalletApi(
    window.cardano,
    "mainnetuh7BSl82SvaM7upRBcQfkKUV8lWOogRr",
    WASM_lib
)

await Nami.enable()
console.log('nami isEnabled', await Nami.isEnabled())
console.log('Nami', Nami)
console.log('Nami.getUtxos', await Nami.getUtxos())

async function send() {
    let txHash = await Nami.send(sendData);
    alert(txHash);
}

const buyButton = document.getElementById('buyBtn')
buyButton?.addEventListener('click', send);
async function getComponent() {
    const element = document.createElement('script');
    return element;
}

getComponent().then((component) => {
    document.body.appendChild(component);
});