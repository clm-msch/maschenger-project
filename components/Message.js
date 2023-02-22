import { firebaseApp } from "../firebase_config.js";
import { getFirestore, collection, doc, setDoc, timestamp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";
import { time } from "console";

// const ref = admin.firestore().collection('messages').orderBy('timestamp');

export default {
    data() {
        return {
            user: {
                message: '',
                timestamp: ''
            }
        }
    },
    methods: {
        async sendMessage() {
            const db = getFirestore(firebaseApp);
            const msgRef = collection(db, "testmsg1");
            await setDoc(doc(msgRef, this.user.timestamp), {
                message : this.user.message ,
                timestamp: timestamp()
            });
            this.user.message = '';
            this.user.timestamp = '';
        }
    },
    template: `
        <div>
            <input type="text" v-model="user.message" />
            <button @click="sendMessage">Send</button>
        </div>
    `
}