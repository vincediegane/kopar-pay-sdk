import axios from "axios";
const PROD_URL = "https://koparpay.com/api";
const TEST_URL = "https://koparexpress.info/koparpay/api";

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
  apiKey: string
  test: boolean
}

export interface IKoparPayRequest {
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

export interface IMerchant {
  address: string,
  adminLevel: string,
  apiKey: string,
  canTransferMoney: boolean,
  canUseEditableAmount: boolean,
  canUseEmptyEmail: boolean,
  canUseStripe: boolean,
  countryId: number,
  createdAt: Date,
  defaultCancelUrl: string,
  defaultCurrency: string,
  defaultDescription: string,
  defaultIpnUrl: string,
  defaultSuccessUrl: string,
  email: string,
  enableFees: boolean,
  enableIpn: boolean,
  fees: number
  id: number,
  koparId: string,
  locale: string,
  logo: string,
  name: string,
  phone: string,
  prioritizeXofDisplay: boolean,
  privateKey: string,
  soldePrincipal: number
  status: string,
  updatedAt: Date,
  useCurrencyConverter: boolean,
  websiteUrl: string,
  whiteMark: boolean
}

export interface IService {
  id: number,
  isMobileMoney: boolean,
  isPayinService: boolean,
  isPayoutService: boolean,
  operator: string,
  serviceLabel: string,
  serviceLogoName: string,
  serviceName: string,
  status: string
}

export interface IRecipient {
  countryId: number,
  createdAt: Date,
  firstName: string,
  id: number,
  koparId: string,
  lastName: string,
  phoneNumber: string,
  status: string,
  updatedAt: Date
}

export interface ITransactionResponse {
  amount: number,
  amountIsEditable: boolean,
  amountToDebitXof: number,
  amountXof: number,
  bulkId: number,
  canHaveEmptyEmail: boolean,
  cancelUrl: string,
  commandName: string,
  commandRef: string,
  countryCode: string,
  createdById: number,
  currency: string,
  customFields: any,
  date: Date,
  deviceToken: string,
  email: string,
  errorCode: any,
  fees: number,
  firstName: string,
  id: number,
  ipnUrl: string,
  isTransferTransaction: boolean,
  koparId: string,
  lastName: string,
  merchant: IMerchant,
  merchantId: number,
  mobileMoneyProviderId: number,
  moneyExchangeRate: number,
  paymentCheckoutDate: number,
  paymentProviderId: number,
  phoneNumber: string,
  receptionService: IService,
  receptionServiceId: number,
  recipient: IRecipient,
  recipientId: number,
  responseId: number,
  service: IService,
  serviceId: number,
  status: string,
  successUrl: string,
  transactionType: string,
  updatedAt: Date
}

const headers = {
  'content-type': 'application/json',
  'accept': 'application/json'
}

export class KoparPay {
  private readonly options: IKoparPayOptions;

  constructor (options: IKoparPayOptions) {
    this.options = options;
  }

  getApiUrl(uri: string): string {
    const { test } = this.options;
    console.log(test ? `${TEST_URL}${uri}` : `${PROD_URL}${uri}`);
    return test ? `${TEST_URL}${uri}` : `${PROD_URL}${uri}`;
  }

  createRequestPayment(payload: IKoparPayRequest): Promise<IKoparPayResponse> {
    return new Promise((resolve, reject) => {
      axios({
        url: this.getApiUrl('/transaction/request'),
        method: 'POST',
        data: { apiKey: this.options['apiKey'], ...payload },
        headers
      })
        .then(response => resolve(response.data))
        .catch(error => reject(error))
    })
  }

  getTransactionByKoparId(koparId: string): Promise<ITransactionResponse> {
    return new Promise((resolve, reject) => {
      axios({
        url: this.getApiUrl(`/transaction/${koparId}`),
        method: 'GET',
        headers
      })
        .then(response => resolve(response.data))
        .catch(error => reject(error))
    })
  }
}
