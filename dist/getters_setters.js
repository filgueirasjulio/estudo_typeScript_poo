"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
class Address {
    constructor(_address = '', _zipCode = '', _numberA) {
        this._address = _address;
        this._zipCode = _zipCode;
        this._numberA = _numberA;
    }
    set address(address) {
        if (address.length < 3) {
            throw new Error('invalid address');
        }
        this._address = address;
    }
    get address() {
        return this._address;
    }
    set zipCode(zipCode) {
        this._zipCode = zipCode;
    }
    get zipCode() {
        return this._zipCode.replace(/\D/g, '');
    }
    set numberA(numberA) {
        this._numberA = numberA;
    }
    get numberA() {
        var _a;
        return (_a = this._numberA) !== null && _a !== void 0 ? _a : 123;
    }
}
exports.Address = Address;
const address1 = new Address();
address1.address = 'Rua y';
address1.zipCode = '41150-000';
console.log(address1.address);
console.log(address1.zipCode);
console.log(address1.numberA);
