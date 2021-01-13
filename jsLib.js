const myLibrary = [];
let newBookBtn = document.querySelector('button#addBookBtn');
let bookArea = document.querySelector('div.book-area');

newBookBtn.addEventListener('click',displayBooks);


//Book const.
function Book(title,author) {
	this.title = title;
  this.author = author;
  this.hasRead = false;  
}

function bookInfo(tit,auth){
  let bookMetaData = new Book(tit,auth);
  return bookMetaData;
}
function getBookInput(){
  let bTitle  = document.querySelector('input#bookTitle').value;
  return bTitle;
}
function getAuthInput(){
  let authName = document.querySelector('input#authorName').value;
  return authName;
}
function getCheckInput(){
  let checkBoxState = document.querySelector('input#hasRead').checked;
  return checkBoxState;
}

function addBookToLibrary(anObject,anArray) {
  return anArray.push(anObject);
}




/*  Main Function to display Input */


function displayBooks(){
  let  bookDataObj= bookInfo(getBookInput(),getAuthInput());
  bookDataObj.hasRead = getCheckInput();
  let funcArr = [];
 
  addBookToLibrary(bookDataObj,funcArr);

  funcArr.forEach((element,index) => {
    //Parent Node
    let cardCol = document.createElement('div');
    cardCol.setAttribute('class','col')
    bookArea.appendChild(cardCol);

    let cardDiv = document.createElement('div');
    cardDiv.setAttribute('class','card text-center border border-3 border-dark text-white bg-dark rounded mb-3');
    cardCol.appendChild(cardDiv);

    let cardBody = document.createElement('div');
    cardBody.setAttribute('class','card-body')
    cardDiv.appendChild(cardBody);

    let cardTitle = document.createElement('h4');
    cardTitle.setAttribute('class','card-title display-6')
    cardTitle.textContent = `${element.title}`;
    cardBody.appendChild(cardTitle);

    let bookAuth = document.createElement('p');
    bookAuth.setAttribute('class','card-text lead');
    bookAuth.textContent = `${element.author}`;
    cardBody.appendChild(bookAuth);

   let checkDiv = document.createElement('div');
   checkDiv.setAttribute('class','form-check form-switch');
   let readStatus = document.createElement('input');
   readStatus.setAttribute('type','checkbox');
   readStatus.setAttribute('class','form-check-input');
   readStatus.checked = hasRead;
   let checkLabel = document.createElement('label');
   checkLabel.setAttribute('class','form-check-label');
   checkLabel.textContent = "Completed reading";
   cardBody.appendChild(checkDiv);
   checkDiv.appendChild(checkLabel);
   checkLabel.appendChild(readStatus);
   
   let deleteBtn = document.createElement('button');
   deleteBtn.setAttribute('class','btn btn-danger delete-button mt-3');
   deleteBtn.setAttribute('data-index',`${index}`)
   deleteBtn.textContent = "Delete from Library"
   cardBody.appendChild(deleteBtn)
   let currentDeleteBtn = document.querySelectorAll('button.delete-button');
   currentDeleteBtn.forEach(zeButton =>{zeButton.addEventListener('click',deleteBook);});
    
  });
  function deleteBook(event){
    let clickedButton = event.target.parentNode;
    let btnIndex = event.target.dataset.index;
    let mainNode = clickedButton.parentNode;
    funcArr.splice(btnIndex,1);
    mainNode.remove();
    
  }

} 

