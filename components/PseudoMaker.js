export default {
    data() {
        return {
            pseudo: null
        }
    },
    methods: {
        save() {
            this$emit('update', this.pseudo)
        }
    },
    template: `
        <div>
        <h1>Rejoint le groupe</h1>
        <input type="text" v-model="pseudo" @keyup.enter="save" />
        <button v-model="pseudo" @click="save">Se connecter a ton groupe</button>
        </div>
    `   
}