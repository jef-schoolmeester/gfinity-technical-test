<template>
    <div class="w-full flex flex-col items-center bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-2xl p-2 py-4 lg:flex-row lg:pb-10 lg:mt-10">
        <img :src="imageUrl" />
        <div class="w-full flex flex-wrap justify-evenly">
            <StatisticComponent :name="'PAC'" :statistic="statistics.pace" />
            <StatisticComponent :name="'SHO'" :statistic="statistics.shooting" />
            <StatisticComponent :name="'PAS'" :statistic="statistics.passing" />
            <StatisticComponent :name="'DRI'" :statistic="statistics.dribbling" />
            <StatisticComponent :name="'DEF'" :statistic="statistics.defense" />
            <StatisticComponent :name="'PHY'" :statistic="statistics.physical" />
        </div>
    </div>
</template>
  
<script lang="ts">
import { Statistics } from '../../lib/types'

import StatisticComponent from './Statistic.vue'

export default {
    name: 'StatisticsComponent',
    components: {
        StatisticComponent
    },
    props: {
        imageUrl: {
            required: true,
            type: String as () => string
        },
        statistics: {
            required: true,
            type: Object as () => Statistics
        }
    }
}
</script>