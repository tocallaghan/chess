import React from 'react'

export default (props) => {
    const { color, coords} = props

    const handleClick = () =>
    {
        console.log(coords)
    }
    return(
        <div className={color}>

            <button
                onClick={handleClick}
                className='flex text-sm justify-center items-center w-full h-full'> 
                {JSON.stringify(coords)}
            </button>
        </div>
    )
}