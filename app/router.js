import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom';

import createHistory from 'history/createHashHistory';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';

import * as store from './stores';
import App from './App';
import NoMatch from './routes/Error/noMatch';

const hashHistory = createHistory();
const routingStore = new RouterStore();
const stores = Object.assign({}, store, {routingStore:routingStore});
const history = syncHistoryWithStore(hashHistory, routingStore);

const routes = [
    {
        path: '/home',
        component: require('./routes/Home/Home'),
    },
    {
        path: '/others',
        component: require('./routes/Others/Others'),
        homepage : '/others/one', // not nessesary (default: false， if has index)
        hideInMenu : false, // not nessesary (default: false, if not show on the menu)
        noMatch: NoMatch,  // not nessesary (default: false, if has 404 page)
        children : [
            {
                path: '/others/one',
                component: require('./routes/Others/One/Others_one'),
            },
            {
                path: '/others/two',
                component: require('./routes/Others/Two/Others_two'),
            },
        ]
    }
];

const getRoutes = (menus) => { 
        return( 
        menus.map((item, i)=>{
            if(item.children){
                return (
                    <Route path={item.path} key={item.path+i} render={()=>(
                        <item.component>
                            <Switch>
                                { (!item.homepage) ? 
                                    "" : 
                                    <Route exact path={item.path} render={() => <Redirect to={item.homepage} />} />  
                                }
                                { getRoutes(item.children) }
                                {
                                    (!item.noMatch) ? 
                                        "" :
                                        <Route component={item.noMatch}/>                                     
                                }
                            </Switch>
                        </item.component>
                    )} />
                )
            }else{
                return (
                    <Route exact key={item.path+i} 
                        path={item.path} 
                        component={item.component} />
                )
            }
        })
    )
}

const RouterConfig = ()=> (
    <Provider store={stores}>
        <Router history={history}>
            <div>
                <Route path='/' render={()=>(
                    <App>
                        <Switch>
                            <Route exact path="/" render={() => <Redirect to="/home"/>} />
                            { getRoutes(routes) }
                            <Route component={NoMatch}/>
                        </Switch>
                    </App>
                )} />
            </div>
       </Router>
    </Provider>
);

export default RouterConfig;