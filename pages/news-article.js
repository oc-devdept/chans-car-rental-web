import React, { Component } from "react";
// Page Layout
import Default from "Components/Layout/PageTemplates/Default";

var articleStyle = {
    backgroundImage: `url(${"assets/pictures/ChansNewspaper.jpg"})`
}

class NewsArticle extends Component {
  render() {
    return(
      <Default>

        <div className="container mt-3">
          <h1>Our News Article</h1>
        </div>
        <img src={require('../assets/pictures/ChansNewspaper.jpg')} />
        {/* {width="1000"} */}

      </Default>
    )
  }
}

export default NewsArticle