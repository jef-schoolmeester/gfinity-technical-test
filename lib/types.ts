type Statistic = { average: number }
type Statistics = { average: number } & Record<string, number>

export interface FifaCard {
    name: string
    rating: number
    position: string
    cardType: string
    statistics: {
        passing: Statistic
        physical: Statistic
        dribbling: Statistic
        defense: Statistic
        pace: Statistic
        shooting: Statistic
    }
    workRatesAttacking: string
    workRatesDefensive: string
    slug: { current: string }
}

export type FifaCards = Array<FifaCard>

export interface DetailedFifaCard extends FifaCard {
    statistics: {
        passing: Statistics
        physical: Statistics
        dribbling: Statistics
        defense: Statistics
        pace: Statistics
        shooting: Statistics
    }
}