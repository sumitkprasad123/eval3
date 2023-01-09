import React from 'react'
import Link from "next/link"

const Navbar = () => {
    const style={
            width:"100%",  
            display:"flex",
            alignItems:"center",
            gap:"3rem",
            padding:"1rem",
            color:"white",
            backgroundColor:"black"
         }
  return (
    <div style={style} > 
        <h3><Link href="/">Sumit Kumar</Link></h3>
        <h3><Link href="/experience">Experience</Link></h3>
        <h3><Link href="/projects">Projects</Link></h3>
    </div>
  )
}

export default Navbar

