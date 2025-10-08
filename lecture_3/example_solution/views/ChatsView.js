import dataService from "../service/dataService.js";

const htmlTemplate = /*html*/`
<div>
  <h2>Chats</h2>
  <div>Select a contact in order to show the conversation:</div>
  <ul>
    <li v-for="contact of contacts"><router-link :to="'/conversation/' + contact.id">{{ contact.name }}</router-link></li>
  </ul>

  <button @click="deleteAllData()">Delete all chat data</button>
</div>
`

export default {
  template: htmlTemplate,
  components: {},
  data() {
    return {
      contacts: dataService.getContacts()
    }
  },
  methods: {
    deleteAllData() {
      if (!confirm('Do you really want to delete all chat data?')) {
        return;
      }
      console.log("deleting all data");
      for (let contact of this.contacts) {
        dataService.saveMessages([], contact.id);
      }
    }
  }
};