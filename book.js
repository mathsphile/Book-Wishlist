function savebook()
{
    var bookname = document.getElementById('bookname');
    var price = document.getElementById('price');
    var link = document.getElementById('link');
    var message = document.getElementById('message');

    var new_book = {
        "bookname" : bookname.value,
        "price": price.value,
        "link" : link.value
    }

    if(localStorage.getItem('booklist'))
    {
        var booklist = JSON.parse(localStorage.getItem('booklist'))
        booklist.push(new_book);
        localStorage.setItem('booklist', JSON.stringify(booklist))
    }
    else{
        var booklist = [];
        booklist.push(new_book);
        localStorage.setItem('booklist', JSON.stringify(booklist))
    }

    alert("Book Added")
    window.location.href = "BookList.html";
}

function displayAllBooks()
{
    if(localStorage.getItem('booklist'))
    {
        var booklist = JSON.parse(localStorage.getItem('booklist'));

        var temp = "";

        for(i=0; i<booklist.length; i++)
        {
            temp += '<div class="book">';
                temp += '<img src="'+booklist[i].link+'" alt="" >';
                temp += '<h4 class="name">'+booklist[i].bookname+'</h4>';
                temp += '<h4 class="price">Rs. '+booklist[i].price+'</h4>';
            temp += '</div>';
        }
        document.getElementById('allbooklist').innerHTML = temp;
    }
    else{
        document.getElementById('allbooklist').innerHTML = "There are no Books Available";
    }
}