// to-do list
//specific behaviors- create task, remove task, 

function ToDoList() {
  this.chores = {};
  this.currentId = 0
}

ToDoList.prototype.addChore = function(chore) {
  chore.id = this.assignId();
  this.chores[chore.id] = chore;
}

function Chore(choreName) {
  this.name = choreName;
  this.done = false;
}

ToDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

ToDoList.prototype.deleteChore = function(id) {
  //if (this.chores[id] === false) {
     //return false;
   //}
   delete this.chores[id]
   //return true;
 }

/*
let laundry = new Chore("laundry");
let groceries = new Chore("groceries");
let newList = new ToDoList();
newList.addChore(laundry)
newList.addChore(groceries)
*/

let list = new ToDoList();

$(document).ready(function() { 
  $("form#formOne").submit(function(event) {
    event.preventDefault();


    let newTask = $("#noteInput").val();
    let chores = new Chore(newTask)
    list.addChore(chores)
    console.log(list)
    
    $("#choreList").append("<li>" + newTask + "</li>");


    
  }); 


  $("form#formTwo").click(function(event) {
  event.preventDefault();
  let id = $("#delete").val();
  list.deleteChore(id)


  });
});


//addressBook.findContact("2");
//ToDoList.findChore("");
//// Business Logic for AddressBook ---------
// function AddressBook() {
//   this.contacts = {};
//   this.currentId = 0;
// }

// AddressBook.prototype.addContact = function(contact) {
//   contact.id = this.assignId();
//   this.contacts[contact.id] = contact;
// };

// AddressBook.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// };

// // Business Logic for Contacts ---------
// function Contact(firstName, lastName, phoneNumber) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.phoneNumber = phoneNumber;
// }

// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// };