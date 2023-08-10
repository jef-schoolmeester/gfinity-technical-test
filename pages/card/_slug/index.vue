<template>
    <h1>Hello card page</h1>
</template>
  
<script lang="ts">
import { fetchFifaCard } from '../../../lib/fifaCardApi'

export default {
    name: 'CardPage',
    async asyncData({ params }) {
        const fifaCard = await fetchFifaCard(params.slug)
        return { fifaCard }
    },
}
</script>
  