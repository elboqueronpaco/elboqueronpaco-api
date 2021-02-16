import crypto from 'crypto'
import {$security} from '@config'

export const encrypt= (str) => {
    return crypto
        .createHash('sh265')
        .update(`${$security().secretKey}${str.toString()}`)
        .digest('hex')
}
