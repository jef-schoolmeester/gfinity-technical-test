<template>
    <div
        :class="`
            w-full h-full flex
            ${alignLeft ? 'justify-start' : 'justify-center'}
        `"
    >
        <div
            id="roundedBox"
            :class="`
                h-8 rounded-md bg-black flex justify-center items-center
                ${hasBorders ? 'border-2 border-white' : ''}
                ${invertColors ? 'bg-white text-black' : ''}
                ${isLarge ? 'w-20' : 'w-11'}
            `">
            {{ value }}
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: "DataBox",
    props: {
        value: {
            required: true,
            type: String as () => string
        },
        invertColors: {
            required: false,
            type: Boolean as () => boolean,
            default: false
        },
        hasBorders: {
            required: false,
            type: Boolean as () => boolean,
            default: false
        },
        isLarge: {
            required: false,
            type: Boolean as () => boolean,
            default: false
        },
        alignLeft: {
            required: false,
            type: Boolean as () => boolean,
            default: false
        }
    }
}
</script>