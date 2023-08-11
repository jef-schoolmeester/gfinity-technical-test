type SingleStatistic = { average: number }
export type Statistic = { average: number } & Record<string, number>

export interface Statistics {
    passing: Statistic
    physical: Statistic
    dribbling: Statistic
    defense: Statistic
    pace: Statistic
    shooting: Statistic
}

export interface FifaCard {
    name: string
    rating: number
    position: string
    cardType: string
    statistics: {
        passing: SingleStatistic
        physical: SingleStatistic
        dribbling: SingleStatistic
        defense: SingleStatistic
        pace: SingleStatistic
        shooting: SingleStatistic
    }
    workRatesAttacking: string
    workRatesDefensive: string
    slug: { current: string }
}

export type FifaCards = Array<FifaCard>

export interface DetailedFifaCard extends FifaCard {
    club: string
    league: string
    nation: string
    strongFoot: string
    age: string
    height: string
    statistics: Statistics
    cardImage: {
        _type: string,
         asset: {
            _ref: string,
            _type: string
        }
    }
}