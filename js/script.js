const container = document.querySelector(".container");
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
      "https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=100&order=market_cap_desc",
      options
    );
    const response = await items.json();
    console.log(response);
    container.innerHTML = "";
    for (let i = 0; i < response.length; i++) {
      const mainItems = response[i];
      if (i === 25) {
        break;
      }
      container.innerHTML += ` <div class="card"> 
                                <div class="details-image" 
      style="background-image: url('${mainItems.image}')"></div>
                                <h3>${mainItems.name} (${mainItems.symbol})</h3>
                                <h4>${mainItems.current_price} $</h4>

      `;
    }
  } catch (error) {
    console.log(error);
  }
}

data();
