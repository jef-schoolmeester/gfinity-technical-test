<template>
  <main>
    <div v-for="card in fifaCards" :key="card.name">
      <NuxtLink :to="'card/' + card.slug.current">
        {{ card.name }}
      </NuxtLink>
    </div>
    <CounterTest />
  </main>
</template>

<script lang="ts">
import { fetchFifaCards } from '../lib/fifaCardApi'

import CounterTest from '../components/Counter.vue'

export default {
  name: 'IndexPage',
  components: {
    CounterTest
  },
  async asyncData() {
    const fifaCards = await fetchFifaCards()
    return { fifaCards }
  }
}
</script>
