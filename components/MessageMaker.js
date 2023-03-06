// import { db } from "../firebase_config.js";
// import { getFirestore, collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.16.0//firebase-firestore.js";

// export default {
//     data() {
//         return {
//             user: {
//                 message: ''
//             }
//         }
//     },
//     methods: {
//         async sendMessage() {
//             const db = getFirestore(firebaseApp);
//             const msgRef = collection(db, "testmsg1");
//             await setDoc(doc(msgRef, this.user.timestamp), {
//                 message : this.user.message
//             });
//             this.user.message = '';
//         }
//     },
//     template: `
//         <div>
//             <input type="text" v-model="user.message" />
//             <button @click="sendMessage">Send</button>
//         </div>
//     `
// }

export default {
    data() {
        return {
            newMessage: "",
        };
    },
    props: {
        roomId: String,
        pseudo: String,
    },
    methods: {
        sendMessage() {
            this.$emit("message-sent", this.newMessage);
            this.newMessage = "";
        },
    },
    template: `
    <div>
        <input v-model="newMessage" @keyup.enter="sendMessage" />
    </div>
    `
};