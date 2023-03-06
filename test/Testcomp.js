import { firebaseApp } from "../firebase_config.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

export default {
    data() {
        return {
            roomId: null
        }
    },
    methods: {
        // méthode qui permet de créer un groupe et de rediriger vers la page du groupe
        async submit() {
            const db = getFirestore(firebaseApp);
            const rooms = collection(db, "rooms");
            const docRef = await addDoc(rooms, {});
            this.roomId = docRef.id;
            window.location.href = `?room=${this.roomId}`;
        },
    },
    template: `
        <div>
        <h1>Maschenger</h1>
        <button v-model="roomId" @click="submit">Creer un groupe</button>
        </div>
    `
}
