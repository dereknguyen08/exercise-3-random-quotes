const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The difference between ordinary and extraordinary is that little extra. - Jimmy Johnson",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller"
  ];
  
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const chosenQuote = quotes[randomIndex];
  
  console.log(chosenQuote);
  