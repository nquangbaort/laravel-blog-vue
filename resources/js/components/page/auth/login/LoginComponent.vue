<template>
    <div>
        <div class="form-wrap" :style="styleForm">
            <div class="login-form">
                <div class="login-form-header">
                    <h1 class="text-center">{{ title }}</h1>
                </div>
                <div class="login-form-body">
                    <form @submit.prevent="handleSubmit">
                        <div class="form-group">
                            <input-component
                                :classInput="'form-control'"
                                :label="'Email'"
                                :id="'email'"
                                :required="true"
                                :type="'email'"
                                :value="email"
                                :placeholder="'Enter your email'"
                                :rules="[validator.required, validator.emailVailidator]"
                                :name="'email'"
                                @input="email = $event.value"
                            >
                            </input-component>
                        </div>
                        <div class="form-group">
                            <input-component
                                :classInput="'form-control'"
                                :label="'Password'"
                                :id="'password'"
                                :required="true"
                                :type="'password'"
                                :value="password"
                                :rules="[validator.required, validator.passwordValidator]"
                                :name="'password'"
                                :placeholder="'Enter your password'"
                                @input="password = $event.value"
                            >
                            </input-component>
                        </div>
                        <alert-component
                            :errors="errors"
                             v-if="Object.keys(errors).length > 0"
                            @closeAlert="closeAlert"
                        ></alert-component>
                        <div class="text-center py-2">
                            <button-component :text-button="'Login'" :type="'submit'"></button-component>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { registerModule } from "@common";
import StoreModule  from "./StoreModule";
import alertComponent from "@other/alert/AlertComponent";
import inputComponent from "@other/input/InputComponent";
import buttonComponent from "@other/button/ButtonComponent";
import { required, emailVailidator, passwordValidator } from "@common/validation";
import login from './login';
export default {
    name: "LoginComponent",
    components: {
        alertComponent,
        inputComponent,
        buttonComponent
    },
    setup() {
        registerModule(StoreModule, 'loginModule');

        const { title, styleForm, handleSubmit, email, password, errors, status } = login();
        const closeAlert = () => {
            errors.value = {}
        };
        return {
            email,
            password,
            title,
            handleSubmit,
            styleForm,
            errors,
            status,
            closeAlert,
            validator: {
                required,
                emailVailidator,
                passwordValidator
            }
        }
    }
}
</script>

<style scoped>

</style>
