import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';

const Root = () => {

  const tabs = [
    { title: 'Our feelings about Widgets', id: 'one' },
    { title: 'Thanos SNAP', id: 'two' },
    { title: 'Tony Stark SNAP', id: 'three'},
  ]

  return (
    <>
      <Clock />
      <div className="taw-container">
        <Tabs tabs={tabs} />
        <Weather />
      </div>
      
    </>
  )
}

export default Root;