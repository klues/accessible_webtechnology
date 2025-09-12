---
marp: true
theme: fhtw
footer: 'Accessible Webtechnology – Lesson 2'
paginate: true

title: Accessible Webtechnology – Lesson 2
keywords: JavaScript and Vue.js, Accessibility, NVDA

---

<!--
_footer: ''
_class : lead
-->

# Accessible Webtechnology - Lesson 2

JavaScript and Vue.js, Accessibility, NVDA

---
## Lesson 2 Overview

- JavaScript and Vue.js
- Accessibility
- NVDA

---

<!--
_footer: ''
_class : lead
-->

# JavaScript and Vue.js

---

## What is Vue.js?

- framework for building web applications
- can be used for **quickly building prototypes**
- is also used by **big websites and projects** (e.g. orf.at, GitLab)

<div class="mt-2">

- web applications are developed **component-based**
- Vue.js is basically a **JavaScript programm** running in the browser
- **dynamically renders HTML** based on defined components and user interaction
</div>

</div>

<div>
<img src="img/vuejs.png" alt="" width="350" class="mt-3">
</div>
</div>

---

## Single-Page Application (SPA) concept

<img class="mt-3" src="./img/spa_concept.png" alt="concept of a single-page application, client on the left, web server on the right. Client makes a request to open a website, server responds with HTML, CSS, JavaScript. Javascript consists of Vue.js and components. The client (browser) on the one hand renders the given HTML and runs the Javascript program Vue.js. Vue.js now dynamically updates the rendered HTML making the website dynamic and interactive." height="420" />

---

## Use of Vue.js for components

```js
import Message from "./Message.js";

const htmlTemplate = /*html*/`
<ol>
   <li>
      <Message/>
   </li>
   <li>
      <Message/>
   </li>
</ol>
`

export default {
  template: htmlTemplate,
  components: { Message }
};
```

Vue.js actually replaces our `<Message/>` element with the HTML defined in the `Message.js` component.

---
<!--
_footer: ''
-->

## Adding interactivity

* Vue.js components (like our `Message`, `MessateList`, etc.) can made more interactive easily:

```js
import Message from "./Message.js";

const htmlTemplate = /*html*/`
<ol>
   <li v-for="message of messages">
      <Message/>
   </li>
   <button @click="addMessage()">Add</button
</ol>
`

export default {
  template: htmlTemplate,
  components: { Message },
  data() {
   return {
      messages: ["Text 1", "Text 2", "Text 3"]
   }
  },
  methods: {
   addMessage() {
      this.messages.push("New Text");
   }
  }
};
```

---

## Vue.js: data binding

**Data binding**: connects variables from JavaScript with HTML

<div class="columns">
   <div>
      
Vue.js definition of some data for a component:
```js
data() {
   return {
      messages: ["Text 1", "Text 2", "Text 3"]
   }
  }
```
   </div>

   <div>

Usage of `messages` data within HTML template:
```html
<div>First message:</div>
<div>{{ messages[0] }}</div>

<div>All messages:</div>
<div v-for="message of messages">{{ message }}</div>
```
   </div>
</div>

* data binding makes it **easy to render data to HTML**
* **curly braces** are used to access data, e.g. `{{ data }}`
* no curly braces needed for special functions (*directives*):
   * `v-for`: loop through arrays, e.g. `v-for="msg of messages"`, duplicates the HTML element for each array element
   * `v-if`: conditionally show something based on data
      * e.g. `v-if="messages.length === 0"` to show something only if there are no messages

---

## Vue.js: methods

---


<!--
_footer: ''
_class : lead
-->

# Accessibility

---

## WCAG and the POUR principles

The **Web Content Accessibilty Guidelines (WCAG)** define these basic principles:

- **Perceivable** – users must be able to perceive information with their senses
   - e.g. alternative text of images, captions of videos,  good document structure
- **Operable** – the website must be operable for all users
   - everything must be accessible via keyboard, without mouse
- **Understandable** – everybody should be able to understand the website
   - e.g. labels for inputs, language of the webpage, understandable error-handling
- **Robust** – it should be possible to use the webpage by current and future browsers and screen-readers
   - e.g. write valid HTML code with start and end tags and valid attributes

---

## Example for good accessibility

```html
<h1>Heading</h1>
This is a list of tree elements:
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
<div>
Please provide your data:
<label for="name">Name</label>
<input id="name" type="text">
<label for="email">E-Mail</label>
<input id="email" type="email">
</div>

```

---

## Example for good accessibility explained

- using tags like `h1` for headings adds meta information - this is a heading
- using `ul` and `li` for the list also adds meta information - this is a list
- using correct `for` and `id` attributes on connects `labels` with `input` elements
   - adds meta information which label belongs to which input field.

→ For accessibility it's very important to:
- provide data about the structure of a document and it's content
- information should never be available only in a visual way (e.g. font-size and color)

---

## Screen Reader: NVDA

- Free screen reader for Windows  
- Download: [nvaccess.org](https://www.nvaccess.org)

---

## NVDA: Getting Started

### Basic Shortcuts

| Action | Key |
|--------|-----|
| Start reading | `Insert + ↓` |
| Stop reading | `Ctrl` |
| Next heading | `H` |
| Next link | `K` |
| Element list | `Insert + F7` |
| Current item | `Insert + Tab` |

> Test your sites using NVDA + Firefox