import React from 'react'
import DisplayInfo from '../components/DisplayInfo';
import Layout from '../components/Layout'

const Comics = () => {
  console.log("comics")
  return (
    <Layout>
      <DisplayInfo entity={"comics"} />
    </Layout>
  )
}

export default Comics