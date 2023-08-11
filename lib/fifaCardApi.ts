import { client } from './config'

import { DetailedFifaCard, FifaCards } from './types'

export const fetchFifaCards = async () => {
    const players = await client.fetch<FifaCards>('*[_type == "fifaCard"]')
    return players
}

export const fetchFifaCard = async (playerSlug: string) => {
    const fifaCard = await client.fetch<DetailedFifaCard>(
        /* groq */`
            *[_type == "fifaCard" && slug.current == "${playerSlug}"]
             {
                name,
                club,
                league,
                nation,
                strongFoot,
                age,
                height,
                workRatesAttacking,
                workRatesDefensive,
                statistics,
                cardImage
            }
            [0]
        `
    )
    return fifaCard
}