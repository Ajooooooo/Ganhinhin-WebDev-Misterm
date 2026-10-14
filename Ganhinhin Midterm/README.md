# WebDev Midterm Exam by Josh Ganhinhin
Multi-page static app in HTML, CSS and JavaScript. No backend, database or API.
Everything in the code comes from the lesson slides: webdev1, webdev2, webdev3 (HTML and CSS) and inputs_and_js (inputs and JavaScript). Map below.

## Run
Open `index.html` in a browser.

## Structure
| Path | Purpose |
|---|---|
| `index.html` | Landing page |
| `pages/login.html`, `signup.html` | Login and signup forms with checks |
| `pages/feed.html` | Write posts, delete posts |
| `pages/profile.html` | Write your bio |
| `pages/about.html` | Mission and principles |
| `src/css/style.css` | Styles (external style sheet) |
| `src/js/main.js` | All JavaScript, one function per feature |
| `assets/img/logo.svg` | Logo |

## Slide map (what comes from where)
| Used in the code | Slide |
|---|---|
| `<input type="text/password/checkbox">`, `<label for>`, `<button onclick>` | inputs_and_js: Inputs, Text, CheckBox, Button |
| `<script>` tag (head or body) | inputs_and_js: The `<script>` Tag |
| `let`, `const` | Variables |
| String, Number, Boolean, Array, Null | 8 Datatypes |
| `=`, `+`, `==` , `++` | Operators |
| `if / else if / else` | if Statement |
| `for` loop, `continue` | Loops, Break and Continue |
| `function`, arrow function, parameter and argument | Functions, Arrow Functions |
| `alert(...)` | Button |
| `getElementById`, `.innerHTML`, `.style.color`, `.value` | DOM, Changing HTML Elements |
| `<!DOCTYPE html>`, `<html>`, `<head>`, `<title>`, `<body>`, `<h1>`-`<h6>`, `<p>`, `<img src>` | webdev1: Opening and Closing Tags, Headings, Elements |
| `<ol>`, `<ul>`, `<li>` | webdev1: Ordered / Unordered List |
| `<div>` | webdev2: HTML division Tag |
| `<a href>` and `<a href="#id">` jump link | webdev2: HTML anchor Tag |
| `style="color:blue;"` inline style | webdev3: CSS (Inline) |
| External style sheet `<link rel="stylesheet" href=...>` | webdev3: External CSS |
| `background-color`, `color`, `font-size`, `font-family`, `font-weight`, `text-align` | webdev2: Basic styling, webdev3: CSS |
| `width`, `padding`, `margin`, `margin-left`, `margin-bottom` | webdev2: Box Model, Margin |
| `display: flex`, `justify-content`, `align-items`, `flex-wrap` | webdev3: Flexbox |

## Limits
The slides have no way to save data, so posts and bio live in memory and reset when the page reloads or you change pages. Login and signup only check that the fields are filled in.
