const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

const generateJoke = async () => {
        const res = await fetch("https://geek-jokes.sameerkumar.website/api?format=json")
        const data = await res.json();
        console.log(data);
        joke.innerText = data.joke;
    
}