import { db } from "../firebase_config.js";
import { getFirestore, collection, doc, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

import MessageMaker from "./MessageMaker.js";

export default {
    components: {
        MessageMaker
    },
    data() {
        return {
            message: []
        }
    },
    props: {
        roomId: String,
        pseudo: String
    },
    async mounted() {
        // const url = new URLSearchParams(window.location.search)
        // this.roomId = url.get('room')
        // console.log(this.roomId)
        this.getMessages();
    },
    methods: {
        getMessages() {
            const messagesQuery = query(collection(db, "roomList", this.roomId, "messages"), orderBy("publishedAt", "asc"));
        }
    },
    template: `
        <div v-for="message in messages">
            {{ message.pseudo }}: {{ message.content }}
        </div>
    `
}