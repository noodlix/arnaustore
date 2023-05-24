import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components/UI'
import directives from './directives'

// import Vue from 'vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)

})

directives.forEach(directive => {
    app.directive(directive.name, directive)
})


app
    .use(store)
    .use(router)
    .mount('#app')

    // .use(VueAxios, axios)


