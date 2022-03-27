<template>
    <div class="input-component">
        <label v-if="label" :for="id">{{ label }}</label>
        <input
            :id="id"
            :name="name"
            :type="type"
            :placeholder="placeholder"
            :disabled="disabled"
            :required="required"
            :class="classInput + classValidate"
            :style="styleInput"
            v-on:keyup="validate"
            v-on:keydown="validate"
            v-on:keypress="validate"
            v-on:change="validate"
            v-on:blur="validate"
        />
        <div class="input-component__error text-danger" v-if="error !== true">{{ error }}</div>
    </div>
</template>

<script>
import { checkIfFunction } from '@common/'
import { ref, watch } from "@vue/composition-api";

export default {
    name: "InputComponent",
    props : {
        rules: { type: Array, default: () => [] },
        classInput : { type : String, default : '' },
        id: { type: String, default: null },
        name: { type: String, default: null },
        type: { type: String, default: "text" },
        placeholder: { type: String, default: null },
        value: { type: String, default: null },
        disabled: { type: Boolean, default: false },
        required: { type: Boolean, default: false },
        label: { type: String, default: null },
        styleInput: { type: Object, default: () => ({}) },
    },
    setup(props, { emit }) {
        const error = ref(null)
        const classValidate = ref('')
        const validate = (event) => {
            const value = event.target.value
            let errors = []
            if (props.rules.length > 0) {
                props.rules.forEach(rule => {
                    error.value =  checkIfFunction(rule) ? rule(value) : false
                    if(typeof error.value === 'string') {
                        errors.push(error.value)
                    }else {
                        errors.slice(0, errors.length - 1)
                    }
                });
                classValidate.value = errors.length > 0 ? ' is-invalid' : ' is-valid'
            }
            emit('input', {
                value,
                errors,
                event
            })
        }
        return {
            checkIfFunction,
            error,
            classValidate,
            validate
        }
    },
}
</script>

<style scoped>

</style>
