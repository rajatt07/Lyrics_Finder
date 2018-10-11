import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Lyrics/Layout/Navbar'
import Index from './Lyrics/Layout/Index'
import Lyricss from './Lyrics/tracks/Lyricss'
import {Provider} from './context'

import './App.css'

class App extends Component {
render() {
  return(
    <Provider>
    <Router>
    <React.Fragment>
   <Navbar />
   <div className="container">
   <Switch>
     <Route exact path="/" component={Index} />
     <Route exact path="/Lyrics/track/:id" component={Lyricss} />
     </Switch>
   </div>
   </React.Fragment>
   
    </Router>
    </Provider>
  );
}
}
export default App;