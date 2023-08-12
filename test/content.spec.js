import { parseContentTitle, compareTwoValues } from '@/lib/content'

describe('parseContentTitle', () => {
    test('it should put spaces between capitals', () => {
        expect(parseContentTitle('oneTest')).toEqual('one Test')
    })

    test('it should not put spaces if there aren\'s capitals', () => {
        expect(parseContentTitle('onetest')).toEqual('onetest')
    })
})

describe('compareTwoValues', () => {
    test('it should compare two strings', () => {
        expect(compareTwoValues('AAA', 'BBB', 'asc')).toBe(-1)
    })

    test('it should compare two strings but DESC', () => {
        expect(compareTwoValues('AAA', 'BBB', 'desc')).toBe(1)
    })

    test('it should compare two equal strings', () => {
        expect(compareTwoValues('AAA', 'AAA', 'asc')).toBe(0)
    })

    test('it should compare two equal strings DESC', () => {
        expect(compareTwoValues('AAA', 'AAA', 'desc')).toBe(0)
    })

    test('it should compare two numbers', () => {
        expect(compareTwoValues(2, 4, 'asc')).toBe(-1)
    })

    test('it should compare two numbers but DESC', () => {
        expect(compareTwoValues(2, 4, 'desc')).toBe(1)
    })

    test('it should compare two equal numbers', () => {
        expect(compareTwoValues(2, 2, 'asc')).toBe(0)
    })

    test('it should compare two equal numbers DESC', () => {
        expect(compareTwoValues(2, 2, 'desc')).toBe(0)
    })

    test('it should NOT compare two different types', () => {
        try {
            expect(compareTwoValues(1, 'test')).toBeFalsy()
        } catch (error) {
            expect(error.message).toBe('Cannot compare different types')
        }
    })
})