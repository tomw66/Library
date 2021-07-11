let myLibrary = [];
const container = document.querySelector('#container');

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
      if (this.read === true) {
      return title + "<br><br>" + author + "<br><br>" + pages + " pages<br><br>Finished and enjoyed!"}
      else {
        return title + "<br><br>" + author + "<br><br>" + pages + " pages<br><br>Still to read!"}
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
      const card = document.createElement('div');
      card.classList.add('card');
      container.appendChild(card);  
      card.id = "card" + i;
      let text = document.createElement('div');
      text.innerHTML = myLibrary[i].info();
      card.classList.add('text');
      card.appendChild(text);  
      const deleteButton = document.createElement("BUTTON"); 
      deleteButton.innerHTML = "Delete";
      deleteButton.id = "delete" + i;
      deleteButton.onclick =  function(){
        myLibrary.splice(i, 1);
        document.getElementById("card" + i).remove(); 
      }
      card.appendChild(deleteButton);  
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

  const theHobbit = new Book('The hobbit', 'J.R.R. Tolkien', 295, 'not read yet')

  function openForm() {
    document.getElementById("form").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("form").style.display = "none";
  }