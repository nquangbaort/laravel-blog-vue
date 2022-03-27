
<template>
    <loader v-if="loading" object="#ff9633" color1="#ffffff" color2="#17fd3d" size="5" speed="2" bg="#343a40" objectbg="#999793" opacity="80" name="circular"></loader>
</template>

<script>
import { computed } from '@vue/composition-api'
import store from '@/store'
export default {
    name: "loading",
    setup(props) {
        const loading = computed(() => store.state.loading)
        return { loading }
    }
}
</script>

<style lang="scss" scoped>

</style>
