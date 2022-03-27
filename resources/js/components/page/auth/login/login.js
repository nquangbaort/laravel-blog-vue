import { ref, watch } from '@vue/composition-api'
import store from '@store'
export default function login() {
    const email = ref('')
    const password = ref('')
    const errors = ref({})
    const title = ref('Login');
    const status = ref('');
    const styleForm = ref({
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!store.state.loading){
            store.commit('setLoading', true)
            const data = {
                email: email.value,
                password: password.value,
            };

            store.dispatch('loginModule/handleSubmit', data).then(response => {
                window.location.reload();
            }).catch(error => {
                console.log(error);
                errors.value = error.response.data.errors;
                status.value = 'error';
            });
        }
    }

  return {
    email,
    password,
    errors,
    handleSubmit,
    styleForm,title,
    status
  }
}
