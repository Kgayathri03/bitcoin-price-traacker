async function fetchPrice() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const data = await response.json();
        const price = data.bitcoin.usd;
        document.getElementById('price').innerText = $${price};
    } catch (error) {
        document.getElementById('price').innerText = 'Error fetching price';
        console.error('Error:', error);
    }
}

// Fetch price on page load
fetchPrice();