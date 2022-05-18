import React from 'react'
import Square from './Square'

export default () => 
{
    let board = []

    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            const coords = {x:x, y:y}
            const color = (x+y) % 2 ? 'bg-gray-400' : 'bg-gray-300'
            board.push(<Square key={y*8 + x} coords={coords} color={color}/>)
        }
    }

    return(
        <div className='flex w-screen h-screen'>
            <div className='w-full grid grid-cols-8 gap-1'>
                {board}
            </div>                    

        </div>
    )
}

// 