# Kopar Pay API integration ![License](https://img.shields.io/npm/l/kopar-pay)![Npm version](https://img.shields.io/npm/v/kopar-pay)![Npm downloads](https://img.shields.io/npm/dm/kopar-pay)

You are a large company, an SME, a startup or even a self-employed person and you carry out an online commerce activity or wish to digitize your means of payment, KOPAR PAY is entirely designed for you.

# Installation

`npm i kopar-pay --save`

# Usage

### Typescript

```js
import { KoparPay } from "kopar-pay";

const koparPay = new KoparPay({
  apiKey: "YOUR_API_KEY", // will give you the authorization to request payment
  test: false, // Check wether you want to hit the test endpoint or the production one
});
// request body for creating a request payment :
export interface IKoparPayRequest {
  itemPrice: number;
  commandRef: string;
  commandName: string;
  ipnUrl: string;
  successUrl: string;
  cancelUrl: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  currency: string;
}
// Available methods:

// 1- Create request payment

let req: IKoparPayRequest = {...}
koparPay.createRequestPayment(req)
  .then(result => console.log({result}))
  .catch(err => console.log(err))

// 2-Get transaction details by Kopar Id

koparPay.getTransactionByKoparId('KOPAR_ID_GOES_HERE')
  .then(response => console.log(response))
  .catch(error => console.log(error))
```

### Javascript

```js
const { KoparPay } =require("kopar-pay");

const koparPay = new KoparPay({
apiKey: "YOUR_API_KEY", // will give you the authorization to request payment
test: false, // Check wether you want to hit the test endpoint or the production one
});

// Available methods:
let req = {...}
// 1- Create request payment

koparPay.createRequestPayment(req)
.then(result => console.log({result}))
.catch(err => console.log(err))

// 2-Get transaction details by Kopar Id

koparPay.getTransactionByKoparId('KOPAR_ID_GOES_HERE')
  .then(response => console.log(response))
  .catch(error => console.log(error))
```

# Documentation

Link for the documentation(for soon)

## Contributors

- <a href="https://twitter.com/Tweentyceent" alt="Vincent Diégane Faye">Vincent Diégane Faye</a>
  [![](https://img.shields.io/twitter/follow/Tweentyceent?style=social)](https://twitter.com/Tweentyceent)
