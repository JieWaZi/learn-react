import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer/ReducerBox';
import ReduxBox from './pages/ReduxBox';
import Box from './pages/Box';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';


const logger = createLogger()
let store = createStore(
    reducer,
    applyMiddleware(logger,thunk)
)

render(
    <Provider store={store}>
        <div> 
            <Box></Box>
            <ReduxBox></ReduxBox>
        </div>
    </Provider>,
    document.getElementById("container")
);
