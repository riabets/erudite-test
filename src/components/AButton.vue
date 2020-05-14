<template>
    <v-btn
        class="mr-4"
        color="success"
        dark
        rounded
        small
        depressed
        @click="$emit('toggle')"
    >
        {{ text }}
    </v-btn>
</template>

<script>
export default {
    name: "AButton",
    props: {
        text: {
            type: String,
            default: 'a-button'
        }
    },
}
</script>