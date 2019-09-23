import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import Autocomplete from './autocomplete';

const Root = () => {

  const tabs = [
    { title: 'Our feelings about Widgets', id: 'one' },
    { title: 'Thanos SNAP', id: 'two' },
    { title: 'Tony Stark SNAP', id: 'three'},
  ]

  const auto = [
    "Tony Stark", "Nick Fury", "Pepper Potts", "Morgan Stark", "Thor", "Bruce Banner", 
    "Steve Rogers", "Natasha Romanova", "Hawkeye", "Loki", "Doctor Strange", "Thanos",
    "Black Panther", "Peter Parker", "Agent Colson"
  ]

  return (
    <>
      <Clock />
      <div className="taw-container">
        <Tabs tabs={tabs} />
        <Weather />
        <Autocomplete auto={auto} />
      </div>
      
    </>
  )
}

export default Root;