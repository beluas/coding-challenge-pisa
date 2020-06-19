# Important
1. Please install Json server to be able to correctly use the project
npm install -g json-server
 
2. Please run the Local DB on http://localhost:3001 using  : json-server --watch db.json
and the app on http://localhost:3000

# Duration: 1 week
Develop a single page application using Angular framework that implements a simple Blog using the APIs provided by https://jsonplaceholder.
typicode.com. 

You can also use the local version of the apis by running the server locally https://github.com/typicode/json-server .
# Description

A Blog is a collection of Posts.

A Post has the following properties:
- id : unique identifier for the Post
- userId : the id of the user who created the Post
- title : the title of the Post
- body : the content of the post

Each Post could have zero or more Comments. A Comment has the following properties:
- id
- postId
- name
- email
- body

# Requirements
The application must include:
A page that shows the list of all Posts, in particular it shows only the Post’s title and the name of the author and a preview of the body (one line).
By clicking on a Post, the user is redirected to the Post’s details page.

A page that shows the details of a Post including title, author name, body, and all the comments.

A form with a text area and a button at the bottom of the Post’s details page to allow the user to insert a new comment. The new
comment must be sent to the server using the right POST API and then must be added after the other comments.
For displaying the various elements on the pages is required the usage of Flexbox.
