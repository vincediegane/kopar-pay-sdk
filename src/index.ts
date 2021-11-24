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
  apiKey,
  apiUrl
}

export interface IKoparPayRequest {}

export interface IKoparPayResponse {}

export class KoparPay {
  private readonly options: IKoparPayOptions;

  constructor (options: IKoparPayOptions) {
    this.options = {...options}
  }

  displayKoparPayInfos(): string {
    return `displaying kopar pay credentials : API_KEY = ${this.options['apiKey']} and API_URL = ${this.options['apiUrl']}`;
  }
}
