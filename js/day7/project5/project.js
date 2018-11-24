// Use inndex.html and do the following:

// 1. Create a webpage with an h1 of "My Book List".
// 2. Add a script tag to the bottom of the page, where all your JS will go.
// 3. Use This Array
//   [{title: 'The Design of EveryDay Things',
//    author: 'Don Norman',
//    alreadyRead: false
//   },
//   {title: 'The Most Human Human',
//    author: 'Brian Christian',
//    alreadyRead: true
//   }]
// 4. Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// 5. Use a ul and li to display the books.
// 6. add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// 6. Change the style of the book depending on whether you have read it or not.

var newScript = document.createElement('script');
document.body.appendChild(newScript);

let books = [{title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    url: 'https://images-eu.ssl-images-amazon.com/images/I/416Hql52NCL._SY346_.jpg',
    alreadyRead: false
    },
    {title: 'The Most Human Human',
    url: 'https://images-eu.ssl-images-amazon.com/images/I/51hkStT4UNL._SY346_.jpg',
    author: 'Brian Christian',
    alreadyRead: true
}];
let newli = ''
let newUl = document.createElement('ul');
newUl.id = 'books';
document.body.appendChild(newUl);

for(var book of books) {
    newli = document.createElement('li');
    ((book.alreadyRead) ? newli.className = "bookRead": null);
    newli.innerHTML = `<p>${book.title}</p>`;
    newli.innerHTML += `<img src='${book.url}'>`
    document.getElementById('books').appendChild(newli);
    
}


