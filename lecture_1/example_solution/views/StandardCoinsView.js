import CountrySelect from "../components/CountrySelect.js";

const htmlTemplate = /*html*/`
<div>
    <h2>Standard coins</h2>
    <p>This is the selection page for standard coins.</p>
    <country-select/>
  </div>
`

export default {
  template: htmlTemplate,
  components: { CountrySelect }
};