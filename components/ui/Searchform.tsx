import Image from 'next/image'
import React from 'react'
import { Input } from "@/components/ui/input"

import { form } from 'sanity/desk'

const Searchform = () => {
  return (
    <form>
        <label>
            <Image src="/magnifying-glass.svg" className="absolute left-8"height={32} width={32} 
            alt="Search-icon"/>
        
        <Input />

        </label>
    </form>


  )
}

export default Searchform