const book1 = { title: "Crime and Punishment", pages: 1000, rating: 4.7 }
const book2 = { title: "A Dream of Spring", pages: 385, rating: 4.2 }
const book3 = { title: "Ender's Game", pages: 220, rating: 5.0 }
const book4 = { title: "The Great Gatsby", pages: 418, rating: 3.7 }
const book5 = { title: "Orlando", pages: 1800, rating: 1.2 }

// if (book1.pages > 800) {
//     console.log("Wow, that's a long book!")
//     if (book1.rating > 4.5) {
//         console.log("And it's got a great rating!")
//     }
// } else {
//     console.log("That's not so bad")
// }



const evaluateBook = (book) => {
    //book.pages greater than 100? 
    book.pages > 800 ?
        //console log & then check if rating is greater than 4.5
        (console.log("Wow, that's a long book!"),
            book.rating > 4.5 ?
                //if true, console log
                console.log("And it's got a great rating!") :
                //if false, do nothing
                "") :
        console.log("That's not so bad")
}

evaluateBook(book1)
evaluateBook(book2)
evaluateBook(book3)
evaluateBook(book4)
evaluateBook(book5)