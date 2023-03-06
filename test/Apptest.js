import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

import Testcomp from "./Testcomp.js"

createApp({
    components: {
        Testcomp
    },
    data() {
        return {
            pseudo: null
        }
    },
    template: `
    <div>
        <Testcomp />
    </div>
    `
}).mount("#app")