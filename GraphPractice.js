async function getData() {
    const stockData = await fetch('https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2024-01-09/2024-02-10?adjusted=true&sort=asc&limit=120&apiKey=cL6xtNzvNKSXn4YWbAT8fN03QdDpyPFa').then(
      (result) => result.json()
    );
  
    // console.log('Retrieved Data:', stockData);
  
    return stockData;
  }

//   window.onload = getData;