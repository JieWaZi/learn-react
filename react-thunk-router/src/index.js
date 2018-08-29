import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import Main from './pages/async/main';
import Menu from './pages/menu/index'
import thunk from 'redux-thunk'
import reducer from './pages/async/reducer';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom';



const logger = createLogger()
let store = createStore(
    reducer,
    applyMiddleware(logger, thunk)
)

const getRouter = ()=> {
    return (
        <Router>
            <div>
                <div>
                    <Route exact path="/" component={Main} />
                    <Route path="/about/:id" component={Menu} />
                    <Route path="/topics" component={Main} />
                </div>
                <ul>
                    <li><Link to="/">主页</Link></li>
                    <li><Link to="/about/123">关于</Link></li>
                    <li><Link to="/topics">主题列表</Link></li>
                </ul>
            </div>
        </Router>
    )
}

render(
    <Provider store={store}>
        {getRouter()}
    </Provider>
    ,
    document.getElementById("container")
);
