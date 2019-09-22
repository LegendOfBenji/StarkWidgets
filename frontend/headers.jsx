import React from 'react';

class Headers extends React.Component {

  render() {
    const selected = this.props.selectedTab;
    const headers = this.props.tabs.map((tab, idx) => {
      const title = tab.title;
      const klass = idx === selected ? 'active' : '';

      return (
        <li 
          className={klass}
          onClick={() => this.props.changeTab(idx)}
          key={idx}
          id={idx}>
          {title}{' '}
        </li>
      )
    });
    
    return (
      <ul className="tab-header">
        {headers}
      </ul>
    )
  }
}


export default Headers;