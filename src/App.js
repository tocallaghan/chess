import React from 'react'
import Board from './components/Board'
import { GameProvider } from './context/game'

export default () => {
    return(
        <GameProvider>
            <Board />
        </GameProvider>
    )
}