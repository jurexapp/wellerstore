// import axios from "axios";
import React from "react";

var randomQuotes = async () => {
  // const response = await fetch(
  //   " https://www.mashape.com/andruxnet/random-famous-quotes"
  // );
  // const data = await response.json();
  // console.log(data);
};

const styles = {};
function Randomquotes() {
  return (
    <div style={styles} id="quote-box">
      <h1 id="text"></h1>
      <h2 id="author"></h2>
      <button id="new-quote" onClick={randomQuotes}>
        New Quote
      </button>
      <button id="tweet-quote">Tweet Quote</button>
    </div>
  );
}

export default Randomquotes;
