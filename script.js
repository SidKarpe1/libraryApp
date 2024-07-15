const myLibrary = [];

function Book(title, author, info, pages, status){
    this.title= title;
    this.author = author;
    this.info = info;
    this.pages = pages;
    this.status = status;
};


//add functionality 
const add = document.getElementById('addButton');
const section = document.getElementById('section2');
add.onclick = () => {

    const bar = document.createElement("div");
    bar.className = "infoOfBook";
    bar.id = "infoOfBook"
    const directions = document.createElement("h2")
    directions.textContent = "Please fill out the following info"
    bar.appendChild(directions)
    const title = document.createElement("input");
    title.id = "titleInput"
    title.placeholder = "title of book"
    bar.appendChild(title);
    const author = document.createElement("input");
    author.id= "authorInput"
    author.placeholder = "author of book"
    bar.appendChild(author);
    const info = document.createElement("input");
    info.placeholder = "any information about the book"
    info.id = "infoInput"
    bar.appendChild(info);
    const pages = document.createElement("input");
    pages.id = "pagesInput"
    pages.placeholder = "number of pages"
    bar.appendChild(pages);
    const status = document.createElement("input");
    status.id = "statusInput"
    status.placeholder = "progress on the book"
    bar.appendChild(status);
    const submit = document.createElement("button");
    submit.textContent = "submit";
    submit.id="submitButton"
    submit.onclick = submitAction;
    bar.appendChild(submit);
    section.appendChild(bar);
    
};

function submitAction(){
    //create book and add to list
    const entry = new Book();
    entry.title = propertyToBook("titleInput");
    entry.author = propertyToBook("authorInput");
    entry.info= propertyToBook("infoInput");
    entry.pages = propertyToBook("pagesInput");
    entry.status = propertyToBook("statusInput");
    myLibrary.push(entry);
    console.log(myLibrary);

    //remove submit section
    const submitInfo = document.getElementById("infoOfBook");
    submitInfo.remove();
    // console.log(submitInfo);
    // const array = [entry];
    createCards(entry);

    //add to display
};

function propertyToBook(element){
    const temp = document.getElementById(element);
    const value = temp.value
    return value
}

//display functions
function createCards(element){
    const items = document.getElementById("books");
    const div = document.createElement("div");
    div.className = "card";
    div.id = element.title;
    const title = document.createElement("p");
    title.textContent = element.title;
    title.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;"
    div.appendChild(title);
    const author = document.createElement("p");
    author.textContent = element.author;
    div.appendChild(author);
    const info = document.createElement("p");
    info.textContent = element.info;
    div.appendChild(info);
    const pages = document.createElement("p");
    pages.textContent = element.pages;
    div.appendChild(pages);
    const status = document.createElement("p");
    status.textContent = element.status;
    div.appendChild(status);
    items.append(div);
    ;
    
}

const search = document.getElementById("searchBar").addEventListener('keydown', function(event){
    if (event.key === 'Enter'){
        const query = event.target.value;
        searchForBook(query);
        console.log("Search query: ", query);
    }
});

function searchForBook(query){
    const items = document.getElementById("books").innerHTML="";
    myLibrary.forEach(element => {
        if (element.title == query){
            createCards(element)
        }
    });
}

const displayAllBooks = document.getElementById("displayAllBooks");
displayAllBooks.onclick  = () => {
    const items = document.getElementById("books").innerHTML="";
    myLibrary.forEach(element => {
        createCards(element);
    });
}

