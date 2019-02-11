const STORE = function () {
    let displayBookmarkForm = false;
    let bookmarkList =[];
    let hideDescription = true;
    let hideURL = true;  
    let filterValue = 0;

    function findByID(id){
        return this.bookmarkList.find(bookmarkList => bookmarkList.id === id)
    };
  
    return {
        displayBookmarkForm,
        bookmarkList,
        hideDescription,
        hideURL,
        findByID,
        filterValue
   } 

}();