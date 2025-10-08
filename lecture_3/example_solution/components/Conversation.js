import MessageList from "./MessageList.js";

const htmlTemplate = /*html*/`
<h2>Conversation with Benjamin</h2>
<MessageList :messages="messages"/>
<input type="text" v-model="newText" placeholder="type message...">
<button @click="addMessage()">Send</button>
`

export default {
  template: htmlTemplate,
  components: { MessageList },
  data() {
    return {
      messages: [
        {
          sender: "Benjamin",
          text: "Hello, how are you?"
        },
        {
          sender: "Peter",
          text: "Fine, how are you?"
        }
      ],
      newText: ""
    }
  },
  methods: {
    addMessage() {
      // TODO: add a new message with "sender" and "text" to array "messages"
    }
  }
};