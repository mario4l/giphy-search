import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div style={{ marginTop: "100px" }}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui fluid action input">
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder="Type Keywords"
              required
            />
            <button className="ui button">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
