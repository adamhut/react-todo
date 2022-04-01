import { add, multiply, subtract } from '../Math';

it('does a basic math', () => {

    expect(3 + 2).toBe(5)
    expect(3 * 2).toBe(6)
    expect(Math.sqrt(36)).toBe(6)

})

test('does a basic math read better', () => {

    expect(3 + 2).toBe(5)
    expect(3 * 2).toBe(6)
    expect(Math.sqrt(36)).toBe(6)

})

describe('math test', () => {
    it(' does the basic math add up', () => {
        expect(add(3, 6)).toBe(9)
    })


    it(' does the basic math multiply', () => {
        expect(multiply(3, 6)).toBe(18)
    })


    it(' does the basic math subtract', () => {
        expect(subtract(6, 6)).toBe(0)
    })

})

describe('string test', () => {
    it('contains', () => {

        expect('this is a string').toContain('is a')

    })

})