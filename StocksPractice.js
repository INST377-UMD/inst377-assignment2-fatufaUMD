
function loadStocksAPI() {
    return fetch('https://tradestie.com/api/v1/apps/reddit?date=2022-04-03').then((result) =>
      result.json()
    );
  }
  async function loadUpSite() {
    // const slowAPIResponse = loadStocksAPI();
    // console.log(slowAPIResponse);
  
    dataStock = await loadStocksAPI();
    console.log(dataStock);
    const tickerTable = document.getElementById('tickerTable');
    // const slowProductTable = document.getElementById('slowProductTable');
  
    for (let topFive=0; topFive < 5; topFive++) {
        const tableRow = document.createElement('tr');
      const stockTicker = document.createElement('td');
      const link = document.createElement("a");

      const tickerComments = document.createElement('td');
      const tickerSentiment = document.createElement('td');
      const tickerSentimentImage = document.createElement('IMG');
      var imageSource;
   
      tickerComments.innerHTML = dataStock[topFive].no_of_comments;
      tickerSentiment.innerHTML = dataStock[topFive].sentiment;
      const textLink = document.createTextNode(dataStock[topFive].ticker);
      link.appendChild(textLink);
      link.title = "stock";
      link.href ="https://finance.yahoo.com/quote/"+dataStock[topFive].ticker;
 
      if (tickerSentiment.innerHTML ==='Bullish'){
        console.log('bullish')
        imageSource = "https://image.pngaaa.com/229/5904229-middle.png"
    
      }
      else if(tickerSentiment.innerHTML ==='Bearish'){
        console.log('bearish')
         imageSource = "https://toppng.com/uploads/preview/julia-r-stock-market-bear-logo-11563510403d1f6sqrlfz.png"
      }
   
     tickerSentimentImage.setAttribute("src", imageSource);
     tickerSentimentImage.setAttribute("height", "75");
     tickerSentimentImage.setAttribute("width", "75");
  
     stockTicker.appendChild(link);
  
      tableRow.appendChild(stockTicker);
      tableRow.appendChild(tickerComments);
      tableRow.appendChild(tickerSentimentImage);
  
      tickerTable.append(tableRow);
    } ;
 
  }
  async function getData() {
    var stockURL = "AAPL";
    console.log(document.infoForm.nameSubmit.value)
  
    const stockData = await fetch('https://api.polygon.io/v2/aggs/ticker/'+stockURL+'/range/1/day/2024-01-09/2024-02-10?adjusted=true&sort=asc&limit=120&apiKey=cL6xtNzvNKSXn4YWbAT8fN03QdDpyPFa').then(
      (result) => result.json()
    );
  
   
    return stockData;
  }
  async function populateChart() {
        const stockData = await getData();
        console.log(stockData);
        const dateTime = [];
        const stockValue = [];
        const readableDate =[];
        for (let graphing=0; graphing < stockData.results.length;graphing++) {
            
            dateTime.push(stockData.results[graphing].t);
            stockValue.push(stockData.results[graphing].c);
            console.log(dateTime);
        }
        for (let dateConverter=0; dateConverter < dateTime.length;dateConverter++) {
            
            var myDate = new Date( dateTime[dateConverter]);
           var practicalDate = (myDate.toGMTString());
     
           readableDate.push(practicalDate);
           console.log(readableDate);
        }

       
        const ctx = document.getElementById('myChart');
        new Chart(ctx, {
            type: 'line', 
            data: {
              labels: readableDate, 
              datasets: [
                {
                  label: 'Stock Value',
                  data: stockValue,
                  borderWidth: 1,
                },
              ], 
            },
            options: {
              animations: {
                tension: {
                  duration: 1000,
                  easing: 'linear',
                  from: 1,
                  to: 0,
                  loop: true,
                },
              },
              scales: {
                y: {
                  beginAtZero: false,
                },
              },
            },
          });

      
        };

window.addEventListener('load', loadUpSite);
window.addEventListener('load', populateChart);
  
