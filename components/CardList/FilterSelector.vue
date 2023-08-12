<template>
    <th
        class="font-normal px-1 py-3"
        @click="$emit('toggle-sort', property)"
    >
        <div :class="`w-full h-full flex justify-center items-center ${hideBorder ? '' : 'border-r border-zinc-600'}`">
            <p class="mr-1">{{ name }}</p>
            <div class="flex flex-col">
                <img src="/up-arrow.svg" :class="`transition-opacity ${isSortedDesc ? 'opacity-0' : ''}`" />
                <img src="/down-arrow.svg" :class="`transition-opacity ${isSortedAsc ? 'opacity-0' : ''}`" />
            </div>
        </div>
    </th>
</template>
<script lang="ts">
export default {
    name: "FilterSelector",
    props: {
        name: {
            required: true,
            type: String as () => string
        },
        property: {
            required: true,
            type: String as () => string
        },
        currentSort: {
            required: true,
            type: Array as unknown as () => [string, 'asc' | 'desc']
        },
        hideBorder: {
            required: false,
            type: Boolean as () => boolean,
            default: false
        }
    },
    data: ({ currentSort, property }) => {
        return {
            isSortedAsc: currentSort[0] === property && currentSort[1] === 'asc',
            isSortedDesc: currentSort[0] === property && currentSort[1] === 'desc', 
        }
    },
    watch: {
        currentSort: function (newVal: [string, 'asc' | 'desc']) {
            const [sortedPropert, type] = newVal
            this.isSortedAsc = sortedPropert === this.property && type === 'asc'
            this.isSortedDesc = sortedPropert === this.property && type === 'desc'
        }
    }
}
</script>