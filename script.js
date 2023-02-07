// Replace YOUR_API_KEY with your actual API key
const API_KEY = "YOUR_API_KEY";

// URL for the news API
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

// Function to make the API call and retrieve the news data
async function getNewsData() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Function to display the news data as a web story
async function displayNewsData() {
  const newsData = await getNewsData();
  const newsContainer = document.querySelector("#newsContainer");

  // Loop through the news articles and create a section for each article
  newsData.articles.forEach(article => {
    const section = document.createElement("section");
    section.innerHTML = `
      <h2>${article.title}</h2>
      <p>${article.description}</p>
      <img src="${article.urlToImage}" alt="${article.title}" />
    `;
    newsContainer.appendChild(section);
  });
}

displayNewsData();
