import React, { createContext, useReducer, useEffect } from "react";

let AppContext = createContext(undefined);

const initialState = {
    products: [],
    chart: []
}

let persistedState = initialState;

if (typeof localStorage['state'] === 'string')
    persistedState = JSON.parse(localStorage['state']);

let reducer = (state, action) => {
    switch (action.type) {
        case "insertChart":
            return { ...state, chart: [...state.chart, action.product] };
        case "removeChart":
            return { ...state, chart: state.chart.filter((_, i) => i !== action.index) }
        case "createProduct":
            return { ...state, products: [...state.products, action.product] }
        case "clearChart":
            return { ...state, chart: [] }
        case "updateProduct":
            return {
                ...state, products: state.products.map(item => {
                    if (item.codigo === action.code) {
                        let estoque = item.estoque - action.quantity;
                        return { ...item, estoque: (estoque > 0 ? estoque : 0) };
                    }
                    return item;
                }).filter(item => item.estoque > 0)
            }

    }
    return state;
};

function AppContextProvider(props) {
    const fullInitialState = {
        ...initialState,
        ...persistedState,
    }

    let [state, dispatch] = useReducer(reducer, fullInitialState);

    useEffect(() => {
        localStorage['state'] = JSON.stringify(state);
    }, [state]);

    let value = { state, dispatch };


    return (
        <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
    );
}

let AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };