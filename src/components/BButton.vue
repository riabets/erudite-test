<template>
    <v-btn
        class="mr-4"
        color="primary"
        dark
        rounded
        large
        @click="$emit('toggle')"
    >
        {{ text }}
    </v-btn>
</template>

<script>
export default {
    name: "BButton",
    props: {
        text: {
            type: String,
            default: 'b-button'
        }
    }
}
</script>