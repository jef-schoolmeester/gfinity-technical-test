<template>
    <div class="bg-black w-full min-h-full p-4 lg:p-8 lg:max-w-5xl">
        <StatisticsComponent :image-url="fifaCardImageUrl" :statistics="fifaCard.statistics" />
        <HeaderComponent :card-name="fifaCard.name" />
        <InformationsComponent
            :club="fifaCard.club"
            :league="fifaCard.league"
            :nation="fifaCard.nation"
            :strong-foot="fifaCard.strongFoot"
            :age="fifaCard.age"
            :height="fifaCard.height"
            :work-rate-attacking="fifaCard.workRatesAttacking"
            :work-rate-defense="fifaCard.workRatesDefensive"
        />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'

import { urlFor } from '@/lib/imageBuilder'
import { fetchFifaCard } from '@/lib/fifaCardApi'

import StatisticsComponent from '@/components/CardDetails/Statistics.vue'
import HeaderComponent from '@/components/CardDetails/Header.vue'
import InformationsComponent from '@/components/CardDetails/Informations.vue'

export default defineComponent({
    name: 'CardPage',
    components: {
        StatisticsComponent,
        HeaderComponent,
        InformationsComponent
    },
    async asyncData({ params }) {
        const fifaCard = await fetchFifaCard(params.slug)
        const fifaCardImageUrl = urlFor(fifaCard.cardImage)
        return { fifaCard, fifaCardImageUrl }
    },
})
</script>
  