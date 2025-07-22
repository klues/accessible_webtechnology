const htmlTemplate = /*html*/`
  <div>
    <nav aria-labelledby="country-label">
      <h3 id="country-label">Select a Country</h3>
      <ul>
        <li><router-link to="/">Austria</router-link></li>
        <li><router-link to="/">Germany</router-link></li>
        <li><router-link to="/">Italy</router-link></li>
      </ul>
    </nav>
  </div>
`

export default {
  template: htmlTemplate
};