'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'
import Home from './components/Home'


//add to sign up/sign in component
const ExampleApp = connect(
 ({ auth }) => ({ user: auth })
)(
 ({ user, children }) =>
   <div>
     <nav>
       {user ? <WhoAmI/> : <Login/>}
     </nav>
     {children}
   </div>
)


render(
 <Provider store={store}>
   <Router history={browserHistory}>
     <Route path="/" component={Home} >
          <IndexRedirect to="/" />
     </Route>
     <Route path='*' component={NotFound} />

   </Router>
 </Provider>,
 document.getElementById('main')
)

//<Route path="/" component={ExampleApp}>
