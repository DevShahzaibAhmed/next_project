import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    NavBar
    {children}
    Footer
    </>
  )
}

export default layout