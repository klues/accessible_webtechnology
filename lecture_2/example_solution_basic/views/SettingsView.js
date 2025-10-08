const htmlTemplate = /*html*/`
<div>
  <h2>Settings</h2>
  <label for="name">Your name</label>
  <input id="name" type="text" v-model="name" @input="nameChanged()">
</div>
`

export default {
  template: htmlTemplate,
  data() {
    return {
      name: ""
    }
  },
  methods: {
    nameChanged() {
      console.log("This is the new name:", this.name);
      // TODO: save the name using dataService and use
      // it as "sender" for new messages in Conversation.js
    }
  }
};