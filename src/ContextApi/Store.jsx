import React, { useState } from 'react'
import { createContext } from 'react'

export const AppContext = createContext()

function AppStore({ children }) {

    const [products, setProducts] = useState([])

    const store = {
        products,
        updateProducts: (payload) => setProducts(payload)
    }

    return (
        <AppContext.Provider value={store}>
            {children}
        </AppContext.Provider>
    )
}

export default AppStore
