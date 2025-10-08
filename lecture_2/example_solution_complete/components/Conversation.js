import dataService from "../service/dataService.js";
import MessageList from "./MessageList.js";

const htmlTemplate = /*html*/`
<h2>Conversation with {{ contactInfo.name }}</h2>
<MessageList :messages="messages"/>
<input type="text" v-model="newText" placeholder="type message..." @keydown.enter="addMessage()">
<button @click="addMessage()">Send</button>
`

export default {
  template: htmlTemplate,
  components: { MessageList },
  data() {
    return {
      messages: [],
      newText: '',
      contactInfo: {}
    }
  },
  methods: {
    addMessage() {
      this.messages.push({
        sender: "Benjamin",
        text: this.newText
      });
      dataService.saveMessages(this.messages, this.$route.params.contactId);
      this.newText = '';
    }
  },
  mounted() {
    console.log("opened conversation with contactId:", this.$route.params.contactId);
    this.messages = dataService.getMessages(this.$route.params.contactId);
    this.contactInfo = dataService.getContact(this.$route.params.contactId);
    console.log("contactInfo:", this.contactInfo);
  }
};