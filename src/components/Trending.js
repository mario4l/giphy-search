import React from "react";
import giphyTrending from "../apis/giphyTrending";

class TrendingTwo extends React.Component {
  state = { gifsTrending: [], firstGifs: [], lastGifs: [] };

  componentDidMount() {
    this.onTrendingSubmit();
  }

  onTrendingSubmit = async () => {
    const response = await giphyTrending.get("/v1/gifs/trending");

    const firstTrendingGifs = response.data.data.slice(0, 7).map(item => {
      return item.images.fixed_height.url;
    });

    this.setState({
      gifsTrending: response.data.data,
      firstGifs: firstTrendingGifs
    });
  };

  initialGifs = () => {
    let firstGifs = this.state.gifsTrending.slice(0, 7).map(item => {
      return item.images.fixed_height.url;
    });
    this.setState({ firstGifs: firstGifs, lastGifs: [] });
  };

  remainingGifs = () => {
    let lastGifs = this.state.gifsTrending.slice(7, 15).map(item => {
      return item.images.fixed_height.url;
    });
    this.setState({ lastGifs: lastGifs, firstGifs: [] });
  };

  render() {
    return (
      <div>
        <h2 style={{ marginBottom: "20px" }}>Popular GIFs of the week</h2>
        <button
          onClick={this.remainingGifs}
          className="ui right floated button"
          style={{ marginTop: "20px", color: "black" }}
        >
          <i className="chevron right icon" />
        </button>
        <button
          onClick={this.initialGifs}
          className="ui left floated button"
          style={{ marginTop: "20px", color: "black" }}
        >
          <i className="chevron left icon" />
        </button>
        <div className="ui grid" style={{ marginTop: "20px" }}>
          {this.state.firstGifs.map(item => {
            return (
              <div className="two wide" key={item}>
                <a href={item}>
                  <img
                    style={{ maxWidth: "100px" }}
                    src={item}
                    alt={item.title}
                  />
                </a>
              </div>
            );
          })}
        </div>
        <div className="ui grid" style={{ marginTop: "20px" }}>
          {this.state.lastGifs.map(item => {
            return (
              <div className="two wide" key={item}>
                <a href={item}>
                  <img
                    style={{ maxWidth: "100px" }}
                    src={item}
                    alt={item.title}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TrendingTwo;
