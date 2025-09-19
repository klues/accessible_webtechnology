const htmlTemplate = /*html*/`
<div>
   <strong>{{ message.sender }}</strong>
   <p>{{ message.text }}</p>
</div>
`

export default {
  template: htmlTemplate,
  props: ["message"]
};