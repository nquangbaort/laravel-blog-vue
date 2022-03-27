<template>
    <button
        :type="typeButton"
        v-on:click="onclick"
        :class="classButton"
        :style="styleButton"
    >
        {{ textButton }}
    </button>
</template>

<script>
export default {
    name: "ButtonComponent",
    props: {
        classButton: { type: String, default: 'btn btn-primary w-100' },
        typeButton: { type: String, default: 'submit'},
        textButton: { type: String, default: 'Login' },
        onclick: { type: Function, default: () => {} },
        styleButton: { type: Object, default: () => {} }
    }
}
</script>

<style scoped>

</style>
