const htmlTemplate = /*html*/`
  <div>
    <h2>Standard coins</h2>
    <p>This is the country selection page for standard coins.</p>
    <nav aria-labelledby="country-label">
      <h3 id="country-label">Select a Country for standard coins</h3>
      <ul>
        <li><router-link to="/standard-coins/at">Austria</router-link></li>
        <li><router-link to="/standard-coins/de">Germany</router-link></li>
        <li><router-link to="/standard-coins/it">Italy</router-link></li>
      </ul>
    </nav>
  </div>
`

export default {
  template: htmlTemplate
};