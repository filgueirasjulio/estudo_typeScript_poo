export class Address {

    constructor(
        private _address: string = '',
        private _zipCode: string = '',
        private _numberA?: number
    ) { }

    public set address(address: string) {
        if (address.length < 3) {
            throw new Error('invalid address')
        }
        this._address = address
    }

    public get address(): string {
        return this._address
    }

    public set zipCode(zipCode: string) {
        this._zipCode = zipCode
    }

    public get zipCode(): string {
       return this._zipCode.replace(/\D/g, '')
    }

    public set numberA(numberA: number) {
        this._numberA = numberA
    }

    public get numberA(): number {
        return this._numberA ?? 123
    }
}

const address1 = new Address();

address1.address = 'Rua y'
address1.zipCode = '41150-000'
console.log(address1.address)
console.log(address1.zipCode)
console.log(address1.numberA)