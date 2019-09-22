import React from 'react';
import Clock from './clock';
import Tabs from './tabs';


const Root = () => {

  const tabs = [
    { title: 'Our feelings about Widgets', id: 'one' },
    { title: 'Thanos SNAP', id: 'two' },
    { title: 'Tony Stark SNAP', id: 'three'},
  ]

  return (
    <>
      <Clock />
      <Tabs tabs={tabs} />
    </>
  )
}

export default Root;