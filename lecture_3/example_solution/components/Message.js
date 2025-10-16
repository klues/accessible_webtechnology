const htmlTemplate = /*html*/`
<div :class="getClass()">
   <strong>{{ message.sender }}</strong>
   <div>{{ message.text }}</div>
</div>
`

export default {
  template: htmlTemplate,
  props: ["message"],
  methods: {
    getClass() {
      return this.message.sender === "Benjamin" ? "message own-message" : "message other-message";
    }
  }
};