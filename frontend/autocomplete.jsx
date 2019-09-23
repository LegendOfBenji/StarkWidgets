import React from 'react';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      currentList: this.props.auto,
      pressedKeys: ""
    }
    this.pushKey = this.pushKey.bind(this);
    this.searchList = this.searchList.bind(this);
  }

  pushKey(e) {
    const inputKey = e.target.value;
    this.setState({ pressedKeys: this.state.pressedKeys = inputKey });
  }
  

  searchList() {
    if (this.state.pressedKeys.length > 0) {
      let found = [];
      this.props.auto.forEach(name => {
      if (name.slice(0, this.state.pressedKeys.length) === this.state.pressedKeys) {
        found.push(name);
      }
    })
      return found;
    } else {
      return this.props.auto;
    }
  }

  render() {
    const currentNames = this.searchList().map((name, idx) => {
      return (
          <li key={idx}className="avengers-list">{name}</li>
      )
    });

    return (
      <>
        <div className="autocomplete-container">
          <h1 className="taw-title">Avengers</h1>
          <div className="auto-body">
            <input onChange={e => this.pushKey(e)} type="text" name="searchbar" id="search-bar"/>
            <ul className="all-avengers-list">
              {currentNames}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default Autocomplete;