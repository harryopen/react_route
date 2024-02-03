import React from 'react'

export default function Nav() {
  return (
    <div className="flex h-10">
      <div className="flex-1 bg-red-500"></div>
      <div className="flex-1 bg-slate-500">
        <div >
            <ul className="flex justify-center ">
                <li className="flex-1">
                    <Link>home</Link>
                </li>
                <li className="flex-1">
                    <Link color="red">home</Link>
                </li>
                <li >
                    <Link color="green">home</Link>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

function Link(props){
    return <>
        
    </>
}
