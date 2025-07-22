const htmlTemplate = /*html*/`
<div>
  <h2>Standard coins - country "{{ this.$route.params.country }}"</h2>
  <p id="euro-list-label">Please check which coins of country "{{ this.$route.params.country }}" you already have:</p>
  <ul aria-labelledby="euro-list-label">
    <li>
      <input id="2euro" type="checkbox">
      <label for="2euro">2 Euro</label>
    </li>
    <li>
      <input id="1euro" type="checkbox">
      <label for="1euro">1 Euro</label>
    </li>
    <li>
      <input id="50c" type="checkbox">
      <label for="50c">50 cents</label>
    </li>
    <li>
      <input id="20c" type="checkbox">
      <label for="20c">20 cents</label>
    </li>
    <li>
      <input id="10c" type="checkbox">
      <label for="10c">10 cents</label>
    </li>
    <li>
      <input id="5c" type="checkbox">
      <label for="5c">5 cents</label>
    </li>
    <li>
      <input id="2c" type="checkbox">
      <label for="2c">2 cents</label>
    </li>
    <li>
      <input id="1c" type="checkbox">
      <label for="1c">1 cent</label>
    </li>
  </ul>
</div>
`

export default {
  template: htmlTemplate
};