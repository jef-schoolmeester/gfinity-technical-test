<template>
    <thead class="h-12">
        <tr class="h-10">
            <FilterSelector name="Name" property="name" class="w-64" :current-sort="currentSort" @toggle-sort="$emit('toggle-sort', $event)" />
            <FilterSelector name="OVR" property="rating" :current-sort="currentSort" @toggle-sort="$emit('toggle-sort', $event)" />
            <FilterSelector name="POS" property="position" :current-sort="currentSort" @toggle-sort="$emit('toggle-sort', $event)" />
            <FilterSelector name="Type" property="cardType" class="w-20" :current-sort="currentSort" @toggle-sort="$emit('toggle-sort', $event)" />
            <FilterSelector name="PAC" property="statistics.pace" :current-sort="currentSort" @toggle-sort="$emit('toggle-sort', $event)" />
            <FilterSelector name="SHO" property="statistics.shooting" :current-sort="currentSort" @toggle-sort="$emit('toggle-sort', $event)" />
            <FilterSelector name="PAS" property="statistics.passing" :current-sort="currentSort" @toggle-sort="$emit('toggle-sort', $event)" />
            <FilterSelector name="DRI" property="statistics.dribbling" :current-sort="currentSort" @toggle-sort="$emit('toggle-sort', $event)" />
            <FilterSelector name="DEF" property="statistics.defense" :current-sort="currentSort" @toggle-sort="$emit('toggle-sort', $event)" />
            <FilterSelector name="PHY" property="statistics.physical" :current-sort="currentSort" @toggle-sort="$emit('toggle-sort', $event)" />
            <FilterSelector name="WR" property="custom.workRates" class="w-40 text-left" :current-sort="currentSort" :hide-border="true" @toggle-sort="$emit('toggle-sort', $event)" />
        </tr>
    </thead>
</template>
<script lang="ts">
import FilterSelector from './FilterSelector.vue';

export default {
    name: "CardListHead",
    components: {
        FilterSelector
    },
    props: {
        currentSort: {
            required: true,
            type: Array as unknown as () => [string, 'asc' | 'desc']
        }
    }
}
</script>