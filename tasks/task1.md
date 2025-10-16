# Task 1

In this task you'll identify and basically **implement components** of your web application. Your **UI prototype** from course *UX Aspects* is the basis of this task.

## What do do
* **identify all views** of your app (e.g. Login, Settings, Help, ...)
* **identify parts** of your UI prototype which **could be implemented as components** -> see messenger example in the slides
* **translate the components** to a **sensible HTML representation** -> compare with examples in the slides
* **implement the views and components** to your copy of the example solution (see Self-study 1)
   * for each view a separated file in folder "views" - e.g. LoginView.js
   * for each component a separated file in folder "components" - e.g. Conversation.js
* **modify the routes** in "routes.js" to have a route for all your views
* **modify the navigation** (`<nav>` element) in "App.js" in order to be able to navigate to all views within your app
* **delete superfluous components and views** from the example solution, which aren't used by your app (e.g. Conversation.js, UsersView.js, ...)
* **test your solution** by running VS Code "Live Server" (see Self-study 1) and opening it in the browser

## Submission requirements

**Must haves** (in order to achieve the `5%`): 
* one view of your app is existing
* at least 2 files for a (nested) component are existing (compare `Message.js` and `MessageList.js` from the example)
* running your app in the browser shows the view and the component

**Recommended** (in order to be on track to be able to submit the final submission - Task 4):
* all files for your app's views are existing (about 4-10)
* files for the most important components are existing (about 4-10)
* all views should be accessible via navigation links
* running your app in the browser should give a rough idea of it's functionality

## Non-requirements

* don't add any styles to your app - just plain HTML. It looks ugly, but we concentrate on the app's structure for now.
* no need for any dynamic functionality, just add static content. For instance for the chat app, just add one fixed predefined message.
* no need to aim for 100% completeness - focus on understanding the concepts rather than trying to include every detail of your UI prototype in the views/components
* **don't submit AI-generated code which you don't understand**

## What to submit

* create a `.zip` archive of your project folder (e.g. "my-chat-app", the copy of the example solution) and upload it within this task.