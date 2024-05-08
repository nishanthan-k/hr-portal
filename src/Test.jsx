import React from 'react'


const Test = (props) => {
  console.log(props.match.path, "h")

  // const callComp = () => {
  //   if (props.match.path === "/dashboard") {
  //     return <Layout><Dashboard /></Layout>
  //   }
  //   if (props.match.path === "/leave") {
  //     return <Layout><Leave /></Layout>
  //   }
  //   if (props.match.path === "/account") {
  //     return <Layout><Account /></Layout>
  //   }
  // }
  return (
    <>
    TEST COMPONENT
      {/* <Header />
      <SideBar />
      { callComp() }
      {/* <Layout><Dashboard /></Layout> */ }
    </>
  )
}

export default Test