import React from 'react'

export const GameContext = React.createContext()

const initialState = 
{
    moves:[]
}

const GameReducer = (state, dispatch) =>
{
    switch(action.type){

        case 'ADD_MOVE':
            return {
                ...state,
                moves: [...state.moves, action.payload]
            }

        default: return state;
    }
}

export const GameProvider = ( {children} )=>
{
    const [state, dispatch] = React.useReducer(GameReducer, initialState)

    return (
        <GameContext.Provider value={{

        }}>
            {children}
        </GameContext.Provider>
    )
}

export const useGame =  () =>
{
    const context = React.useContext(GameContext)

    if( ! context )
    {
        throw new Error(`useGame must be used with a Game Provider`)
    }

    return context
}