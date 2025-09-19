import Message from "./Message.js";

const htmlTemplate = /*html*/`
<ol>
   <li v-for="message of messages">
      <Message :message="message"/>
   </li>
</ol>
<div v-if="messages.length === 0">No messages.</div>
`

export default {
  template: htmlTemplate,
  props: ["messages"],
  components: { Message }
};