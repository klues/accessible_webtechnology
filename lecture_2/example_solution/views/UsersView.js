const htmlTemplate = /*html*/`
<div>
  <h2>Users</h2>
  <div>Select a user in order to show the conversation:</div>
  <ul>
    <li>
      <router-link to="/conversation">User 1</router-link>
    </li>
    <li>
      <router-link to="/conversation">User 2</router-link>
    </li>
    <li>
      <router-link to="/conversation">User 3</router-link>
    </li>
  </ul>
</div>
`

export default {
  template: htmlTemplate,
  components: { }
};