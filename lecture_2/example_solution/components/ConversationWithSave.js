import dataService from "../service/dataService.js";
import MessageList from "./MessageList.js";

const htmlTemplate = /*html*/`
<h2>Conversation with Benjamin</h2>
<MessageList :messages="messages"/>
<input type="text" v-model="newText" placeholder="type message...">
<button @click="addMessage()">Send</button>
`

const KEY_MESSAGE_DATA = "KEY_MESSAGE_DATA";

export default {
  template: htmlTemplate,
  components: { MessageList },
  data() {
    return {
      messages: [], // TODO: use dataService.get() in order to get saved messages
      newText: ""
    }
  },
  methods: {
    addMessage() {
      this.messages.push({
        sender: "Benjamin",
        text: this.newText
      });
      // TODO: use dataService.save() in order to save the new message
    }
    // TODO: clear input field after sending a message
  }
};