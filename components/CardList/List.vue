<template>
    <table class="w-full text-xs font-bold mt-10 fifaCardTable">
        <CardListHead :current-sort="currentSort" @toggle-sort="toggleSort($event)" />
        <CardListBody :fifa-cards="sortedFifaCards" />
    </table>
</template>
<script lang="ts">
import CardListBody from './ListBody.vue'
import CardListHead from './ListHead.vue'

import { FifaCards } from '~/lib/types'
import { sortFifaCards } from '~/lib/content'

const defaultSort: [string, 'asc' | 'desc'] = ['name', 'asc']

export default {
    name: "CardListComponent",
    components: {
        CardListHead,
        CardListBody
    },
    props: {
        fifaCards: {
            required: true,
            type: Array as () => FifaCards
        }
    },
    data({ fifaCards }) {
        return {
            currentSort: defaultSort,
            sortedFifaCards: fifaCards.sort((a, b) => {
                if (a.name < b.name) return -1
                return 1
            })
        }
    },
    methods: {
        toggleSort(prop: string) {
            const [sortProperty, type] = this.currentSort
            if (sortProperty !== prop) {
                this.currentSort = [prop, 'asc']
            } else if (type === 'asc') {
                this.currentSort = [prop, 'desc']
            } else {
                this.currentSort = defaultSort
            }
            this.sortedFifaCards = sortFifaCards(this.fifaCards, this.currentSort) as FifaCards
        }
    }
}
</script>
<style lang="scss">
.fifaCardTable {
    min-width: 1024px;
    th, td {
        padding: 6px 0;
    }
}
</style>