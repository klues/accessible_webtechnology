---
marp: true
theme: fhtw
footer: 'Accessible Webtechnology – Lesson 1'
paginate: true

title: Accessible Webtechnology – Lesson 1
keywords: Webtechnology, HTML, CSS, Javascript, component-based, WCAG, Accessibility, NVDA

---

<!--
_paginate: skip
_footer: ''
_class : lead
-->

# Accessible Webtechnology - Lesson 1

---

# Course Overview

---
# Accessible Web Technology  
## Lesson 1 Overview

- Basics of Web Development
- HTML, CSS, JS roles
- HTML structure and semantics
- Component-based development
- WCAG overview
- Intro to NVDA screen reader

---

# Basics of Web Development

---

## What is the World Wide Web?
- a worldwide network of computers
- **Clients**: Browsers or devices requesting content
- **Servers**: Host content and respond to requests
- **HTTP**: used communication protocol
- **HTML**: a markup language for structuring content

**Request / Response Flow**  
`Client → Server → Client`

---

## Interaction of client and server

![Image showing browser on the left, web server on the right. The client requests a website from the web server, it responds with some HTML, CSS and JavaScript.](./img/client_server_browser_1_overview.png)

---

## Request and response retrieving a webpage

![HTML structure diagram](./img/client_server_browser_2_request_response.png)

---

## Browser as rendering tool for webpage

![Image showing a browser which requests and receives text files (HTML, CSS, JavaScript). The text files are rendered showing a visual webpage.](./img/client_server_browser_3_render_webpage.png)

---

## Local development of a web application

<img src="./img/client_server_browser_4_dev_computer.png" alt="Image showing browser and web server interacting via HTTP. Also shows text editor which saves HTML, CSS, JavaScript files to local file system. These files are retrieved by the webserver and served to the browser. Everything runs on the same development computer" height="500" />

---

## HTML basics
- HTML is a **markup language**
   -  well defined system for structuring text and information
- **Tags**: reserved keywords for defined elements
   - `<h1></h1>` are tags for a heading level 1
   - tags are like brackets, `<h1>` is an opening tag, `</h1>` a closing tag
- **Attributes**: tags can have additional information
   - `<img src="image.png" alt="Image description">`
   - `src` is the attribute sof defining the image source
   - `alt` is a text describing the image

---

## HTML example

Simple example of some HTML markup:
```html
<h1>This is a heading</h1>
<p>Some text paragraph after the heading.</p>

<h2>Heading level 2</h2>
This is a list, it consists of <code>ul</code> and nested <code>li</code> elements:
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

---

## HTML – Content Elements

Elements for actual content of a website:
- `<h1>`, `<h2>`, `<h3>` etc. – Headings  
- `<p>` – Text paragraph
- `<a>` – Link ("**a**nchor")
- `<img>` – Image  
- `<ul>`, `<ol>` - Lists (**u**nordered, **o**rdered)
- `<strong>`, `<em>` – Emphasis
- ... and many more

---

## HTML – Semantic Regions

HTML elements should be used to define important areas of a page:
- `<header>` – Top section  
- `<nav>` – Navigation menu  
- `<main>` – Main content  
- `<footer>` – Bottom info
- `<article>`, `<section>` – Structured content

Semantic regions are **important for accessibility**! It gives non-visual users orientation on the webpage.

---

## HTML – generic containers

- `<div>` – Block-level container  
- `<span>` – Inline container

**Attention:** Use with care – prefer semantic tags when possible

---

## Try HTML for yourself

Use the online editor of **stackblitz.com** in order to try basic HTML for yourself:

[t1p.de/aw-01a](https://t1p.de/aw-01a)

---

## CSS basics

**Cascading Style Sheets (CSS)** are used for **visual styling** of HTML documents.

Example of a **CSS rule**:
```css
h1 {
  background-color: yellow;
}
```

- `h1` is a **selector**, it selects to which elements the style should apply (all h1 tags)
- `background-color: yellow` is a **declaration** which defines how the selected elements should look like.

---

## JavaScript basics

**JavaScript** is a **programming language** which can be used to **add interactivity** to a webpage.

Example of a code snippet in JavaScript:

```javascript
let fruits = ['Apple', 'Banana', 'Lemon'];
for (let fruit of fruits) {
  document.body.innerHTML += `<div>${fruit}</div>`;
}
```

This Javascript code appends a new `<div>` element for each element of an array at the end of the webpage.

---

## Overview of HTML, CSS, JavaScript

| Technology | Role | Purpose |
|------|------|---------|
| **HTML** | Structure | Page content |
| **CSS**  | Presentation | Styling |
| **JavaScript**   | Behavior | Interactivity |

---

# Component-Based Web Development

---

## What is it?

- Split UI into reusable **components**
- Improves:
  - Maintainability
  - Readability
  - Scalability

---

## Components Examples

- Navigation bar
- Article card
- Modal dialog
- Form input group

> Used in frameworks like React, Vue, Angular

---

# Accessibility

---

## WCAG and the POUR Framework

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

---

## Summary

- Understand client/server and web tech roles  
- Write clean, semantic HTML  
- Think in components  
- Design for accessibility (WCAG)  
- Start using NVDA for testing

---

## Next Steps

🔧 Practice:
- Build a simple semantic page  
- Use components for layout  
- Test with NVDA

💡 Accessibility is not a feature — it's a foundation.

---

# Test colums

<div class="columns">
<div>Test Col 12</div>
<div>
Test Col 21

hallo `test`

`test`
</div>
<div>

`forEach`

</div>
</div>

`forEach`