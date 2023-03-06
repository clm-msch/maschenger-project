import RoomMessage from "./RoomMessage.js";
import RoomMaker from "./RoomMaker.js";
import PseudoMaker from "./PseudoMaker.js";

export default {
    components: {
        RoomMessage,
        RoomMaker,
        PseudoMaker
    },
    data() {
        return {
            roomId: null,
            pseudo: null
        }
    },
    async mounted() {
        const url = new URLSearchParams(window.location.search)
        this.roomId = url.get('room')
        console.log(this.roomId)
    },
    template: `
        <div>
            <RoomMaker v-if="!roomId" />
            <PseudoMaker v-else-if="roomId && !pseudo" @update="value => pseudo = value" />
            <RoomMessage :roomId="roomId" :pseudo="pseudo" /> 
        </div>
    `   
}
