const detailsContainer = document.querySelector(".details-container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
    "X-RapidAPI-Key": "8ed47979admsh8fd6382843921aap1555b4jsn6d1a2da074ac",
  },
};

async function data() {
  try {
    const items = await fetch(
      `https://coingecko.p.rapidapi.com/coins/` + id,
      options
    );
    const response = await items.json();
    console.log(response);
    document.title = `${response.name}` + " || Details";
    detailsContainer.innerHTML = `<h1>${response.name} (${response.symbol})</h1>
                                <div class="details-image" 
    style="background-image: url('${response.image.large}')"></div>
                            <div class="details-headings"> <h2>Current price : ${response.market_data.current_price.usd} $</h2></div>
                            <div class="details-headings"> <h2>Price change 24h : ${response.market_data.market_cap_change_percentage_24h}%</h2></div>
                                <div class="description"><p>${response.description.en}</div>
    `;
  } catch (error) {
    console.log(error);
    detailsContainer.innerHTML = displayError(
      "Select first a coin to see its details "
    );
  }
}
data();
