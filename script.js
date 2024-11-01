const apiURL = "https://quotes-api-self.vercel.app/quote";

// Creating function to fetch the quotes
async function fetchQuotes(){

    const response = await fetch(apiURL)
    // Parsing in JSON format
    const requestQuotes = await response.json();
    console.log(requestQuotes)

    // Returning parsed JSON file to use later
    return requestQuotes
}


async function displayQuote() {

    // Wait for JSON file
    const quotes = await fetchQuotes();

    // Destructure singular quote, separating the quote and the author
    let { quote , author } = quotes;
    console.log(quote, author)

    const buttonNode = document.getElementById("generate")

    // Event listener to display the quote and author on click of the generate button
    buttonNode.addEventListener("click", () => {

        const displayNode = document.getElementById("quoteDisplay")
        displayNode.textContent = `${quote} by ${author}`

    })
}

displayQuote();
