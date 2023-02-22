import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

import App from "./components/App.js"

createApp({
    components: {
        App
    },
    template: `
    <App />
    `
}).mount("#app")




// const url = new URLSearchParams(window.location.search)
// const groupId = url.get('group')
// console.log(groupId)