<template>
    <table class="w-full fifaCardTable">
        <CardListHead />
        <CardListBody :fifa-cards="fifaCards" />
    </table>
</template>
<script lang="ts">
import CardListBody from './ListBody.vue'
import CardListHead from './ListHead.vue'

import { FifaCards } from '~/lib/types';

export default {
    name: "CardListComponent",
    components: {
        CardListHead,
        CardListBody
    },
    props: {
        fifaCards: {
            required: true,
            type: Object as () => FifaCards
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