import { appConfig } from '../app.config'
import store from '../store'
import { onUnmounted } from '@vue/composition-api'
export const registerModule = (module , nameModule = 'app') => {
    const APP_STORE_MODULE_NAME = nameModule
    // Register module
    if (!store.hasModule(APP_STORE_MODULE_NAME)) {
        store.registerModule(APP_STORE_MODULE_NAME, module)
    }
    // UnRegister on leave
    onUnmounted(() => {
        store.commit('setModuleName', null)
        if (store.hasModule(APP_STORE_MODULE_NAME)) store.unregisterModule(APP_STORE_MODULE_NAME)
    })
}
export const checkIfFunction = (func) => {
    return typeof func == 'function'
}
