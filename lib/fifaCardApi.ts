import { client } from './config'

export const fetchFifaCards = async () => {
    const players = await client.fetch('*[_type == "fifaCard"]')
    return players
}

export const fetchFifaCard = async (playerSlug: string) => {
    const players = await client.fetch(`*[_type == "fifaCard" && slug.current == "${playerSlug}"][0]`)
    return players
}