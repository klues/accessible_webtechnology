# Task 2 - implement interactivity

In this task you'll identify and basically **implement interactivity** of your web application. Your **UI prototype** from course *UX Aspects* is the basis of this task.

## What to do

* pick the **most important tasks** users want to perform in your app (compare Task 1 of *UX aspects*)
   * e.g. *"As a user I want to be able to open a conversation for each contact and send messages to contacts"*
* **think how you could implement these tasks** using the concepts learned in lecture 2:
   * which data is needed in which component? (e.g. Array of Objects `{sender: "<name>", text: "<message>"}` for conversations)
   * how to display the data to HTML? (e.g. `v-if` and `v-for` or `{{ data }}`)
   * which data should be stored permanentely (use predefined `dataService.js`)
   * see examples for implementation in slides and `lecture_2/example_solution_complete`)
* **implement basic functionality** for most important tasks of your app
* **test your solution** by running VS Code "Live Server" (see *Self-study 1*) and opening it in the browser
* **test your solution** with NVDA screen reader - can you access all functionality using the keyboard and the screen reader?

## Submission requirements

**Must haves** (in order to achieve the `5%`): 
* any dynamic functionality of a user task of your app must work

**Recommended** (in order to be on track to be able to submit the final submission - Task 4):
* running your app in the browser should provide the most imporant functionalities of your app
* some data should be stored in local storage (dataService.js)

## Non-requirements

* don't add any styles to your app - just plain HTML. It looks ugly, but we concentrate on the app's structure for now.
* no need for real and full functionality - e.g. really sending messages over the internet. Just create and fake data you need ("mock data")
* **don't submit AI-generated code which you don't understand**