import MessageList from "./MessageList.js";

const htmlTemplate = /*html*/`
<h2>Conversation with Benjamin</h2>
<button>↺ Update</button>
<MessageList/>
<input type="text" placeholder="type message...">
<button>Send</button>
`

export default {
  template: htmlTemplate,
  components: {MessageList }
};