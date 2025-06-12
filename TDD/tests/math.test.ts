// math.test.ts
import { describe, it, expect } from 'vitest'
import { sum, multiply } from '../math'

describe('math functions', () => {
  it('suma dos números', () => {
    expect(sum(2, 3)).toBe(5)
  })

  it('multiplica dos números', () => {
    expect(multiply(4, 5)).toBe(20)
  })
})
