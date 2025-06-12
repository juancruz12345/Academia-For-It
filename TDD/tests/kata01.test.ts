import {add} from '../kata01'
import { describe, it, expect, test } from 'vitest'

describe('test kata 1',()=>{
    test('convierte los strings en numero y se suman',()=>{
        expect(add('1,2,3')).toBe(6)
    })
     test('soporte para numeros negativos',()=>{
        expect(add([-1,-2,-3])).toBe(-6)
    })
     test('soporte para decimales',()=>{

        expect(add([2.1,2.1,2.1])).toBe(6.3)
    })
    

   
})




