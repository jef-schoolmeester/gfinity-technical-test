<template>
    <div class="w-full flex justify-between border-b border-zinc-600 pb-4 mt-6 lg:flex-col lg:w-fit lg:pl-4 lg:border-b-0 lg:border-l lg:first:border-l-0">
        <h3 class="font-semibold lg:text-zinc-600">{{ name }}</h3>
        <p class="lg:text-base lg:mt-4">{{ value }}</p>
    </div>
</template>
<script lang="ts">
export default {
    name: 'InformationComponent',
    props: {
        name: {
            required: true,
            type: String as () => string
        },
        value: {
            required: true,
            type: String as () => string
        }
    }
}
</script>