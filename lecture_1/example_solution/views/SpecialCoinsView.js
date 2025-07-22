import CountrySelect from "../components/CountrySelect.js";

const htmlTemplate = /*html*/`
  <div>
    <h2>Special coins</h2>
    <p>This is the selection page for special coins.</p>
    <country-select/>
  </div>
`

export default {
  template: htmlTemplate,
  components: { CountrySelect }
};