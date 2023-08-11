<template>
    <div class="flex flex-col w-full h-auto flex-nowrap lg:flex-row lg:justify-between">
        <Information name="Club" :value="club" />
        <Information name="League" :value="league" />
        <Information name="Nation" :value="nation" />
        <Information name="Strong Foot" :value="strongFoot" />
        <Information name="Age" :value="age" />
        <Information name="Height" :value="height" />
        <Information name="Workrates" :value="workRates" />
    </div>
</template>
<script lang="ts">

import Information from './Information.vue';

export default {
    name: 'InformationsComponent',
    components: {
        Information
    },
    props: {
        club: {
            required: true,
            type: String as () => string
        },
        league: {
            required: true,
            type: String as () => string
        },
        nation: {
            required: true,
            type: String as () => string
        },
        strongFoot: {
            required: true,
            type: String as () => string
        },
        age: {
            required: true,
            type: String as () => string
        },
        height: {
            required: true,
            type: String as () => string
        },
        workRateAttacking: {
            required: true,
            type: String as () => string
        },
        workRateDefense: {
            required: true,
            type: String as () => string
        },
    },
    data: (instance) => ({
        workRates: instance.workRateAttacking + '/' + instance.workRateDefense
    })
}
</script>