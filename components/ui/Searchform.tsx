import Image from 'next/image'
import React from 'react'
import { form } from 'sanity/desk'

const Searchform = () => {
  return (
    <form>
        <label>
            <Image src="/magifying-glass.svg" className="absolute left-8"height={32} width={32} 
            alt="Search-icon"/>
        </label>
    </form>

  )
}

export default Searchform