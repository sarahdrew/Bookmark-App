
'use strict';

/* global $, bookmark, cuid, api */











function error() {
    //This function will handle all errors with our bookmarks.
    if (items) {
        generateErrorMessage(message);
    }

}

function generateErrorMessage(message) {
    return `
     <section class="error-content">
       <button id="cancel-error">X</button>
       <p>${message}</p>
     </section>
   `;
}




function main() {
//    renderBookmarkList();
   //handleAddBookmarkClick();
   //captureBookmark();
   //handleFilter();
   //render();
   api.getBookmarks()
    //.then(res => res.json())
    .then(data => {
    console.log(data);
    STORE.bookmarkList = data
    bookmarks.renderBookmarkList();  
   }) 
//    api.createBookmark().then(res => res.json())
//       .then(data => {
//           console.log(data);
//       })
   bookmarks.bindEventListeners();
   
}

$(main);

