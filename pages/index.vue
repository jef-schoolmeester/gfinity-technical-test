<template>
  <div class="bg-black w-full min-h-full pb-14 lg:pb-0 lg:max-w-5xl">
    <div class="overflow-x-auto pb-14">
      <CardListComponent :fifa-cards="fifaCards" />
    </div>
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
