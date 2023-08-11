<template>
    <div class="flex flex-col w-24 mt-6 mr-2">
        <div class="flex justify-between pt-1 pb-1 border-t-2 border-b-2 border-white">
            <p class="m-0">{{ name }}</p>
            <p class="m-0">{{ average }}</p>
        </div>
        <div v-for="attribute in Object.entries(stats)" :key="attribute[0]" class="mt-6 flex justify-between text-xs">
            <p class="m-0">{{ attribute[0] }}</p>
            <p class="m-0">{{ attribute[1] }}</p>
        </div>
    </div>
</template>
  
<script lang="ts">
import { Statistic } from '../../lib/types'

export default {
    name: 'StatisticComponent',
    props: {
        name: {
            required: true,
            type: String as () => string
        },
        statistic: {
            required: true,
            type: Object as () => Statistic
        }
    },
    data: (instance) => {
        const { average, ...rest } = instance.statistic
        return {
            average,
            stats: rest
        }
    }
}
</script>