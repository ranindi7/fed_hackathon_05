const apiURL = "https://api.api-ninjas.com/v1/quotes";
const apiKey = "CfwNjjhp7eLQPL7TjinSeTE7i1eLwDWaLMfIIkVG"

// Creating function to fetch the quotes
async function fetchQuotes(){
    // Calling API with key as per API documentation 
    const response = await fetch(apiURL, {
        headers: {
            'X-Api-Key': apiKey
        }
    });
    // Parsing in JSON format
    const requestQuotes = await response.json();
    console.log(requestQuotes)

    // Returning quotes to use later 
    return requestQuotes
}

fetchQuotes();
