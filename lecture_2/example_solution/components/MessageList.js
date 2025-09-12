import Message from "./Message.js";

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
  }
};