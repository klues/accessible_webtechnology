import Message from "./MessageBasic.js";

const htmlTemplate = /*html*/`
<ol>
   <li v-for="message of messages">
      <Message/>
   </li>
   <button @click="addMessage()">Add</button>
</ol>
`

export default {
  template: htmlTemplate,
  components: { Message },
  data() {
   return {
      messages: ["Text 1", "Text 2", "Text 3"]
   }
  },
  methods: {
   addMessage() {
      this.messages.push("New Text");
   }
   /* TODO: add a method "clearMessages()" which removes all messages on clicking a button */
   /* TODO: add a text "No messages" if there are no messages (v-if). */
  }
};