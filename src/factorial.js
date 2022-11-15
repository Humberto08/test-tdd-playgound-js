import { typeErrorMessage, rangeErrorMessage } from './utils';

const getFactorial = number => {

    const isNotNumber = typeof number !== 'number'
    const isNotNumberOutOfRange = number < 0 || number > 20

    if (isNotNumber) {
        throw new TypeError(typeErrorMessage)
    }

    if (isNotNumberOutOfRange) {
        throw new RangeError(rangeErrorMessage)
    }

    const isNumberOneOrZero = number === 1 || number === 0

    return isNumberOneOrZero ? 1 : number * getFactorial(number - 1)


}


export default getFactorial;