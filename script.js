let myLibrary = [];
const container = document.querySelector('#container');

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  info() {
    if (this.read === true) {
      return this.title + "<br><br>" + this.author + "<br><br>" + this.pages + " pages<br><br>Finished and enjoyed!"}
    else {
      return this.title + "<br><br>" + this.author + "<br><br>" + this.pages + " pages<br><br>Still to read!"}
    }
  }

  function addBookToLibrary() {
    let newBook = new Book(document.getElementById("title").value, document.getElementById("author").value, document.getElementById("pages").value, document.getElementById("read").checked);
    myLibrary.push(newBook);
    loop();
  }

  function loop() {
    document.querySelectorAll('.card').forEach(e => e.remove());
    for (let i = 0; i < myLibrary.length; i++) {
      //Generate card
      const card = document.createElement('div');
      card.classList.add('card');
      container.appendChild(card);  
      card.id = "card" + i;
      let text = document.createElement('div');
      text.innerHTML = myLibrary[i].info();
      card.classList.add('text');
      card.appendChild(text);  
      //Generate delete button
      const deleteButton = document.createElement("BUTTON"); 
      deleteButton.innerHTML = "Delete";
      deleteButton.id = "delete" + i;
      deleteButton.onclick =  function(){
        myLibrary.splice(i, 1);
        document.getElementById("card" + i).remove(); 
      }
      card.appendChild(deleteButton);  
      //Generate read button
      const readButton = document.createElement("BUTTON"); 
      if (myLibrary[i].read === true) {
        readButton.innerHTML = "Not read"}
        else {
          readButton.innerHTML = "Read"
        }
      readButton.id = "read" + i;
      readButton.onclick =  function(){
        if (myLibrary[i].read === true) {
          readButton.innerHTML = "Read";
          myLibrary[i].read = false
        }
          else {
            readButton.innerHTML = "Not read";
            myLibrary[i].read = true
          }
         text.innerHTML = myLibrary[i].info();
        }
      card.appendChild(readButton); 
    }
  }

  function openForm() {
    document.getElementById("form").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("form").style.display = "none";
  }