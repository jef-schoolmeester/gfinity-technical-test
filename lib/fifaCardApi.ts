import { client } from './config'

import { DetailedFifaCard, FifaCards } from './types'

export const fetchFifaCards = async () => {
    const players = await client.fetch<FifaCards>('*[_type == "fifaCard"]')
    return players
}

export const fetchFifaCard = async (playerSlug: string) => {
    const players = await client.fetch<DetailedFifaCard>(`*[_type == "fifaCard" && slug.current == "${playerSlug}"][0]`)
    return players
}