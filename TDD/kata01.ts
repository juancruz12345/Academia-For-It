type Add = (numbers: string | number[]) => number

export const add: Add = (numbers: string | number[]): number => {

    const roundToOneDecimal = (num: number) => Number(num.toFixed(1))
    if (Array.isArray(numbers)) {

        const result = numbers.reduce((acc, curr) => acc + curr, 0)
        return roundToOneDecimal(result)
    }

    if (typeof numbers === "string") {
        const nums = numbers.split(',').map(Number)
        return nums.reduce((acc, curr) => acc + curr, 0)
    }

    return 0
}
    
    
console.log(add([2.1, 2.1, 2.1]))  