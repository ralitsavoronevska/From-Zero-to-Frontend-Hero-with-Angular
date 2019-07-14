# From-Zero-to-Frontend-Hero-with-Angular
An Angular 7 Workshop event that was powered by Accedia.

# Angular 7 Workshop

**To use the angular-cli, you need to have Node.js & npm installed on your machine.**
* https://nodejs.org/en/
* https://docs.npmjs.com/about-npm/index.html

**You can then install the cli using *npm*, by typing the following command into your command line:**

`npm install -g @angular/cli`

**You also need to install Bootstrap 4 and add it to angular.json**

 `npm install bootstrap` and add `"node_modules/bootstrap/dist/css/bootstrap.min.css"` to the `styles` array in `angular.json`

## :trollface: Task 1
* Use `angular-cli` to generate a new project.
* Display `Hello World` in the auto-generated App Component.
* To run the project use `ng serve` command.

## :trollface: Task 2
* Using the Angular CLI to generate users-table component(e.g.: `ng generate component users-table`).
* Display the Users Table Component in the App Component template.
* Define users property in the newly created component with the following value:
  ```javascript
    [
      { id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', active: true, website: 'hildegard.org' },
      { id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv', active: true, website: 'anastasia.net' },
      { id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net', active: false, website: 'ramiro.info' },
      { id: 4, name: 'Patricia Lebsack', username: 'Karianne', email: 'Julianne.OConner@kory.org', active: true, website: 'kale.biz' }
    ]
  ```
* Your task is to populate a table with the entities from the users array you just defined.
* Use ***ngFor** to display the user id, username and user status.
* In order to display the user status:
    1. Use ***ngIf** to conditionally display 'Active' or 'Inactive'.
    2. Use the active property that each user object has defined to achieve the goal.

## :trollface: Task 3
* In this task you have to display the details of the selected user.
* Using the Angular CLI generate user-details component(e.g.: `ng generate component user-details`).
* Display the User Details Component next to the Users Table Component in the App Component template.
* In the Users Table Component template:
    1. Add a 'Show Details' button for each user.
    2. Add an event listener to the newly created button, which triggers the function for showing the details of the user.
    3. Pass the user as a parameter.

* In the Users Table Component:
    1. Define an event emitter using the Output annotation in order to notify the App Component when the 'Show Details' button has been clicked.
    2. Implement a function in which the event emitter emits the user object.

* In the App Component template:
    1. Subscribe to the event emitter from the Users Table Component.
    2. Pass the emmitted user object to your custom function in the component by using $event argument.
    3. Use property binding to pass the user to the User Details Component.

* In the App Component:
    1. Define a variable which will store the value of the currently selected user.
    2. Implement a function which is subscribed to the event emitter from the Users Table Component and accepts the emitted user object.
    3. In the function assign the accepted value to the defined variable.

* In the User Details Component:
    1. Define a variable using the Input annotation in order to store the accepted user object value from the App Component.

* In the User Details Component template:
    1. If there is no selected user show 'Select a user to see the details!' message.
    2. Otherwise display the user name, email and website.
