type ToRoman = (num: number) => string

export const toRoman:ToRoman = (num:number):string =>{

    if(num<=0){
        return ''
    }
    if(!Number.isInteger(num)){

        let rounded = Math.round(num)
        num = rounded
        
    }
    if (typeof num !== 'number') {
        return ''
    }

  
      const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ]

    let result = ''
    let remaining = num

   
    for (const { value, symbol } of romanNumerals) {
        while (remaining >= value) {
            result += symbol
            remaining -= value
        }
    }

    return result
}
