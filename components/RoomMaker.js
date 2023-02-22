import { db } from "../firebase_config.js";
import { getFirestore, collection, doc, setDoc, addDoc } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

export default {
    data() {
        return {
            roomId: null
        }
    },
    methods: {
        // async sumbit() {
        //     const roomRef = collection(db, "testRoom");
        //     await setDoc(doc(roomRef, this.roomId), {
        //         roomId: this.roomId
        //     });

        // }
        async submit() {
            // votre code ici
            const room = collection(db, “listRoom”);
            const docRef = await addDoc(room, {});
            this.roomId = docRef.id;
            window.location.href = `?group=${this.roomId}`;
        },
    },
    template: `
        <div>
        <h1>Maschenger</h1>
        <button v-model="roomId" @click="createRoom">Creer un groupe</button>
        </div>
    `
}