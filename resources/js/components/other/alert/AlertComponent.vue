<template>
    <div class="alert alert-danger alert-dismissible fade show my-2" role="alert" v-if="Object.keys(errors).length > 0">
        <div v-for="(messages) in errors" class="w-100">
            <li v-for="message in messages" class="d-block">
                <p class="m-0">{{ message }}</p>
            </li>
        </div>
        <buttonComponent
            v-if="errors"
            :style-button="styleButton"
            :text-button="'x'"
            :class-button="''"
            :onclick="closeAlert"
            :type="'button'"
        ></buttonComponent>
    </div>
</template>

<script>
import buttonComponent from '../button/ButtonComponent.vue';
import { ref } from '@vue/composition-api';
export default {
    name: "AlertComponent",
    components : {
        buttonComponent
    },
    props : {
        errors : {
            type : Object,
            default : () => []
        }
    },
    setup(props, { emit }) {
        const styleButton = ref({
            border: 'none',
            position: 'absolute',
            right: '10px',
            top: '10px'
        })
        const closeAlert = () => {
            emit('closeAlert');
        }
        return {
            styleButton,
            closeAlert
        }
    }
}
</script>

<style scoped>

</style>
