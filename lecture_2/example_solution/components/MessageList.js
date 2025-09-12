import Message from "./Message.js";

const htmlTemplate = /*html*/`
<ol>
   <li>
      <Message/>
   </li>
   <li>
      <Message/>
   </li>
</ol>
`

export default {
  template: htmlTemplate,
  components: { Message }
};