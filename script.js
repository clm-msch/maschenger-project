import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

// import Home from "./components/Home.js"
import Message from "./components/Message.js"

createApp({
    components: {
        Message
    },
    template: `
    <Message />
    `
}).mount("#app")




// const url = new URLSearchParams(window.location.search)
// const groupId = url.get('group')
// console.log(groupId)