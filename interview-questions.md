# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What are props in React?

  Your answer:
  Props in React is a way to call on things from State in the main JS that is then rendered to the application. If I gave something a meaning in State on App.js, than I am able to call on it in my components by coding this.props.*whatever is declared in State*. The way I like to correlate React in sections. For example, your App.js is going to be the main house with the different methods being rooms in the house. So if something is declared in State than in order to call on it, I would use my "house phone" being this.state. When the house has guests they need their own space in a "guest house" being the component files. If I need to call on something that is in State from the guest house, than my "cell phone" is going to be this.props. It connects me to the App.js declarations held in State. It passes the data along to be used in the component.

  Researched answer:
  Information can be passed from parent component to the children components with a component call named props. It doesn't have to come direcctly from the State but most of the time you will store the things you want declared in the State. You are able to pass method as a prop accessing the data with this.props and then creating a method and passing it with this.props as well in the child component.



2. What is a DOM event?

  Your answer:
  DOM stands for Document Object Model. DOM event is simply the change on the application. An example of this is when we use onClick and onChange to listen for there to be a change to the application (user interaction) and then assign a behavior to execute for the user.

  Researched answer:
  The DOM is listening for changes. While the user is interacting with your webpage application, we use DOM events to handle the changes the User gives to the code. You might use an onnClick with an onChange to handle the behavior of the click. This will give the click the user gives behavior to change the page. Or even if the cursor has a bahvior needed.




3. What is object-oriented programming? How is it different than functional programming?

  Your answer:
  OOP is the way Ruby sees everything as objects. In React, it was full of Classes with objects, methods, and functions. In Ruby using objects gives developers the ease of working with objects. OOP is easier to section off data to work better with.

  Researched answer:
  As "Matz" created Ruby "everything is an object". Objects are the intersection between data and behavior. Data being stored in variables and the behavior being stored in methods.


4. What is the difference between a Float and an Integer in Ruby?

  Your answer:
  The difference between a Float and an Integer in Ruby is that a Float is a decimal given value and an Integer is given value to the nearest whole number. An example of a Float can look like (1.0) or (2.4). An example of an Integer can look like any number (-45) negative or positive (100). Any of these can be given to a variable (integer = 1) and printed by calling on the variable (p integer).

  Researched answer:
  Floats are for returning a non-whole number. Floats can even return Infinity. While integers will round down naturally. An example of this is if I did 4 / 5 it will return 0. But if I did 4.0 / 5.0 it will return 0.8. 



5. Ruby has an implicit return. What does that mean?

  Your answer:
  Implicit return is when Ruby gives you the automatic return of the last line of code. Lines of code that are within a method (what we know as functions from Javascript) are called blocks, and the implicit returns inside of that help us invoke these methods later.

  Researched answer:
  Implicit return gives the return without having to write 'return' for it to give us the new value after the method.



## Looking Ahead: Terms for Next Week

1. Instance Variable:
  The instance variable is a variable that starts with @ and it means that it belongs to a Class. Every instance of the Class has it's own instance of the variables independent of the Classes objects. An instance variable cannot be accessed from outside of an object, as you could in JavaScript.

2. PostgreSQL:
  PostgreSQL is an object relational database management system that can preform operations such as addition and averages. It's clauses can include COUNT, SUM, AVG, MIN, and MAX.

3. Ruby on Rails:
  Ruby on Rails is a server side web app framework that is open sourced. It provides default structures for a databsse, web service, and web pages.

4. ORM:
  ORM is Object Relational Mapping technique that converts the data that is incompatable using OOP. ORM is a tool for developers to using Ruby on Rails. 

5. Active Record:
  Active Record takes data which stored in a database table and allows you to interact with the data as if it were a Ruby Object. It has specific data types that can be used in each column.
