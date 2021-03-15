import React, { useReducer } from 'react'

export default (reducer: any, actions: any, defaultValue: any) => {
    const Context = React.createContext(defaultValue)
    const Provider = ({ children }: any) => {
        const [state, dispatch] = useReducer(reducer, defaultValue)
        const boundActions: any = {}

        Object.keys(actions).forEach(key => {
            boundActions[key] = actions[key](dispatch)
        })

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        )
    }
    return { Context, Provider }
}
