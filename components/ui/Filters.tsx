"use client"

const links=['All', 'Next 13', 'FrontEnd', 'Backend', 'FullStack']

const Filters = () => {
  return (
    <ul>
        {links.map((link) =>(
            <button key={link} onClick={()=>{}}>
                {link}

            </button>
        ))}
    </ul>
    
  )
}

export default Filters