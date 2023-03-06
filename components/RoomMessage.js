// import { firebaseApp } from "../firebase_config.js";
// import { getFirestore, collection, doc, snapshot, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

// import MessageMaker from "./MessageMaker.js";

// export default {
//     components: {
//         MessageMaker
//     },
//     data() {
//         return {
//             message: []
//         }
//     },
//     props: {
//         roomId: String,
//         pseudo: String
//     },
//     async mounted() {
//         this.getMessages();
//     },
//     methods: {
//         getMessages() {
//             const messagesQuery = query(collection(db, "rooms", this.roomId, "messages"), orderBy("publishedAt", "asc"));

//             onSnapshot(messagesQuery, (snapshot) => {
//                 snapshot.docChanges().forEach((change) => {
//                     if (change.type === "added") {
//                         this.messages.push(change.doc.data());
//                     }
//                 });
//             });
//         }
//     },
//     template: `
//         <div v-for="message in messages">
//             {{ message.pseudo }}: {{ message.content }}
//         </div>
//     `
// }


// const url = new URLSearchParams(window.location.search)
// this.roomId = url.get('room')
// console.log(this.roomId)


import { firebaseApp } from "../firebase_config.js";
import { getFirestore, collection, doc, snapshot, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";
import MessageMaker from "./MessageMaker.js";

export default {
    components: {
        MessageMaker,
    },
    data() {
        return {
            messages: [],
        };
    },
    props: {
        roomId: String,
        pseudo: String,
    },
    async mounted() {
        this.getMessages();
    },
    methods: {
        getMessages() {
            const messagesQuery = query(
                collection(db, "rooms", this.roomId, "messages"),
                orderBy("publishedAt", "asc")
            );

            onSnapshot(messagesQuery, (snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === "added") {
                        this.messages.push(change.doc.data());
                    }
                });
            });
        },
        async addMessage(newMessage) {
            const messageRef = await addDoc(
                collection(db, "rooms", this.roomId, "messages"),
                {
                    content: newMessage,
                    pseudo: this.pseudo,
                    publishedAt: new Date(),
                }
            );
        },
    },
    template: `
    <div>
    <div v-for="message in messages">
        {{ message.pseudo }}: {{ message.content }}
    </div>
        <MessageMaker @message-sent="addMessage" :roomId="roomId" :pseudo="pseudo" />
    </div>
    `
};