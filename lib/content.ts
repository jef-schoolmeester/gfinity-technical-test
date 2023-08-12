import { FifaCard, FifaCards, StatisticKey } from "./types"

export const parseContentTitle = (title: string) => {
    return title.replace(/([A-Z])/g, ' $1')
}

export const compareTwoValues = (valueA: any, valueB: any, comparisonType: 'asc' | 'desc') => {
    let comparisonValue: number
    if (valueA < valueB) comparisonValue = -1
    else if (valueA > valueB) comparisonValue = 1
    else comparisonValue = 0
    if (comparisonType === 'desc') comparisonValue *= -1
    return comparisonValue
}

export const sortByStringProperty = ([...fifaCards]: Array<Record<string, string>>, sort: [string, 'asc' | 'desc']) => {
    const [sortValue, type] = sort
    return fifaCards.sort((a: Record<string, string>, b: Record<string, string>) => {
        const valueA = a[sortValue].trim().toLowerCase()
        const valueB = b[sortValue].trim().toLowerCase()
        return compareTwoValues(valueA, valueB, type)
    })
}

export const sortByNumberProperty = ([...fifaCards]: Array<Record<string, number>>, sort: [string, 'asc' | 'desc']) => {
    const [sortValue, type] = sort
    return fifaCards.sort((a: Record<string, number>, b: Record<string, number>) => {
        const valueA = a[sortValue]
        const valueB = b[sortValue]
        return compareTwoValues(valueA, valueB, type)
    })
}

export const sortByStatisticProperty = ([...fifaCards]: FifaCards, sort: [string, 'asc' | 'desc']) => {
    const [sortValue, type] = sort
    const statisticsValue = sortValue.split('.')[1] as StatisticKey
    console.log(statisticsValue)
    return fifaCards.sort((a: FifaCard, b: FifaCard) => {
        const valueA = a.statistics[statisticsValue].average
        const valueB = b.statistics[statisticsValue].average
        return compareTwoValues(valueA, valueB, type)
    })
}

export const sortByWorkRates = ([...fifaCards]: FifaCards, sort: [string, 'asc' | 'desc']) => {
    const [, type] = sort
    return fifaCards.sort((a: FifaCard, b: FifaCard) => {
        const workRateAttackingA = a.workRatesAttacking
        const workRateAttackingB = b.workRatesAttacking
        const workRateAttackingComparison = compareTwoValues(workRateAttackingA, workRateAttackingB, type)

        const workRateDefensiveA = a.workRatesDefensive
        const workRateDefensiveB = b.workRatesDefensive
        const workRateDefensiveComparison = compareTwoValues(workRateDefensiveA, workRateDefensiveB, type)

        if (workRateAttackingComparison !== 0) return workRateAttackingComparison
        return workRateDefensiveComparison

    })
}

export const sortFifaCards = ([...fifaCards]: FifaCards, sort: [string, 'asc' | 'desc']) => {
    const [sortValue] = sort
    if (sortValue.includes('statistics'))
        return sortByStatisticProperty(fifaCards, sort as [StatisticKey, 'asc' | 'desc'])
    if (sortValue.includes('custom')) 
        return sortByWorkRates(fifaCards, sort)
    if (sortValue === 'rating')
        return sortByNumberProperty(fifaCards as unknown as Record<string, number>[] , sort)
    return sortByStringProperty(fifaCards as unknown as Record<string, string>[], sort)
}