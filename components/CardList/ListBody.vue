<template>
    <tbody>
        <tr
            v-for="fifaCard in fifaCards"
            :key="fifaCard.slug.current"
            class="bg-zinc-900 border-b border-zinc-700 last:border-b-0 hover:bg-zinc-800 transition-colors"
            @click="goToCard(fifaCard.slug.current)"
        >
            <td class="w-full h-full flex justify-center items-center font-semibold uppercase">{{fifaCard.name}}</td>
            <td><DataBox :value="fifaCard.rating.toString()" :invert-colors="true" /></td>
            <td><DataBox :value="fifaCard.position" /></td>
            <td><DataBox :value="fifaCard.cardType" :is-large="true" /></td>
            <td><DataBox :value="fifaCard.statistics.pace.average.toString()" :has-borders="true" /></td>
            <td><DataBox :value="fifaCard.statistics.shooting.average.toString()" :has-borders="true" /></td>
            <td><DataBox :value="fifaCard.statistics.passing.average.toString()" :has-borders="true" /></td>
            <td><DataBox :value="fifaCard.statistics.dribbling.average.toString()" :has-borders="true" /></td>
            <td><DataBox :value="fifaCard.statistics.defense.average.toString()" :has-borders="true" /></td>
            <td><DataBox :value="fifaCard.statistics.physical.average.toString()" :has-borders="true" /></td>
            <td><DataBox :value="fifaCard.workRatesAttacking.charAt(0) + '\\' + fifaCard.workRatesDefensive.charAt(0)" :align-left="true" /></td>
        </tr>
    </tbody>
</template>
<script lang="ts">
import DataBox from './DataBox.vue'

import { FifaCards  } from '~/lib/types'

export default {
    name: "CardListBody",
    components: {
        DataBox
    },
    props: {
        fifaCards: {
            required: true,
            type: Array as () => FifaCards
        }
    },
    methods: {
        goToCard(slug: string) {
            this.$router.push({
                path: `/card/${slug}`
            })
        }
    }
}
</script>