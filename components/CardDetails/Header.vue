<template>
    <div class="w-full flex items-end mt-10">
        <h1 id="headerText" class="text-3xl mr-4 max-w-fit">{{ cardName }}</h1>
        <NuxtLink to="/" class="border-dotted border-b-2 border-zinc-600 text-zinc-600">
            View all cards
        </NuxtLink>
    </div>
</template>

<script lang="ts">

export default {
    name: 'HeaderComponent',
    props: {
        cardName: {
            required: true,
            type: String as () => string
        },
    }
}
</script>