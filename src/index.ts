import dotenv from 'dotenv';
import axios from "axios";
dotenv.config()

const printingKoparPayInConsole = () => {
  return `
    ###    ###  ##########  #########   #########  ########        #########    ##########  ###    ###
    ###   ###   ##########  ##########  #########  #########       ##########   ##########   ###   ###
    ###  ###    ###    ###  ###    ###  ###   ###  ###   ###       ###    ####  ###    ###     ### ###
    ### ###     ###    ###  ###    ###  ###   ###  ###   ###       ###    ####  ###    ###      ######
    ######      ###    ###  #########   #########  ########        ##########   ##########        ####
    ### ###     ###    ###  ########    #########  ########        #########    ##########         ###
    ###  ###    ###    ###  ###         ###   ###  ###   ###       ###          ###    ###         ###
    ###   ###   ##########  ###         ###   ###  ###    ###      ###          ###    ###    ########
    ###    ###  ##########  ###         ###   ###  ###     ###     ###          ###    ###    ######
    `;
}

console.log(printingKoparPayInConsole());

// Starting

export interface IKoparPayOptions {
  apiKey
}

export interface IKoparPayRequest {
  apiKey: string,
  itemPrice: number,
  commandRef: string,
  commandName: string,
  ipnUrl: string,
  successUrl: string,
  cancelUrl: string,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
  currency: string
}

export interface IKoparPayResponse {
  message,
  status,
  token
}

const headers = {
  'content-type': 'application/json',
  'accept': 'application/json'
}

const API_URL = process.env.API_URL

export class KoparPay {
  private readonly options: IKoparPayOptions;

  constructor (options: IKoparPayOptions) {
    this.options = {...options}
  }

  getApiUrl(): string {return `${API_URL}/transaction/request`}

  createRequestPayment(payload: IKoparPayRequest): Promise<IKoparPayResponse> {
    return new Promise((resolve, reject) => {
      axios({
        url: this.getApiUrl(),
        method: 'POST',
        data: payload,
        headers
      })
        .then(response => resolve(response.data))
        .catch(error => reject(error))
    })
  }
}
