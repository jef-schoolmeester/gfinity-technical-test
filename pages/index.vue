<template>
  <div class="bg-black w-full min-h-full lg:max-w-5xl overflow-x-auto">
    <CardListComponent :fifa-cards="fifaCards" />
  </div>
</template>

<script lang="ts">
import { fetchFifaCards } from '../lib/fifaCardApi'

import CardListComponent from '@/components/CardList/List.vue'

export default {
  name: 'IndexPage',
  components: {
    CardListComponent
  },
  async asyncData() {
    const fifaCards = await fetchFifaCards()
    return { fifaCards }
  }
}
</script>
