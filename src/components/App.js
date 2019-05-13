import React from "react";
import giphyTrending from "../apis/giphyTrending";
import giphySearch from "../apis/giphySearch";
import giphyRandom from "../apis/giphyRandom";
import SearchBar from "./SearchBar";
import GiphyList from "./GiphyList";
import Random from "./Random";
import Trending from "./Trending";

class App extends React.Component {
  state = { gifs: [], gifRandom: {}, term: "" };

  onTrendingSubmit = async () => {
    const response = await giphyTrending.get("/v1/gifs/trending");
    this.setState({ gifsTrending: response.data.data });
  };

  onTermSubmit = async term => {
    const response = await giphySearch.get("/v1/gifs/search", {
      params: { q: term }
    });
    this.setState({ gifs: response.data.data, gifRandom: {}, term: term });
  };

  onRandomSubmit = async () => {
    const response = await giphyRandom.get("/v1/gifs/random");
    this.setState({
      gifRandom: response.data.data.images.fixed_height,
      gifs: [],
      term: ""
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <Trending />
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <Random
          gifsRandom={this.state.gifRandom.url}
          onRandomSubmit={this.onRandomSubmit}
        />
        <GiphyList gifs={this.state.gifs} term={this.state.term} />
      </div>
    );
  }
}

export default App;
