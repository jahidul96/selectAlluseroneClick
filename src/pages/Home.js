import React, { useState } from 'react'

const slideTitle = [
    {
        id: 1,
        name: "ALL"
    },
    {
        id: 2,
        name: "Recomended"
    },
    {
        id: 3,
        name: "Popular"
    }
]




export default function Home() {
    const [tagname, setTagName] = useState("ALL")

    const check = (name) => {
        setTagName(name)
    }
    return (
        <div className='homeDiv'>
            <div className='tab'>
                {
                    slideTitle.map(title => (
                        <button className={tagname === title.name ? "extraStyle" : ""} onClick={() => check(title.name)} key={title.id}>{title.name}</button>

                    ))
                }
            </div>

            <div>
                {
                    tagname === "Recomended" ? <div><h2>Hello from Recomended</h2></div> : tagname === "Popular" ? <div><h2>Hello from Popular</h2></div> : <div><h2>Hello from ALL</h2></div>
                }
            </div>
        </div>
    )
}
