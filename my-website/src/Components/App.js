import '../App.css'
import Nav from './Nav'
import { Route, Switch} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Resume from './Resume'
import Footer from './Footer'


function App() {
  return (
    <div className="App">
      <Nav />
      <div className="Container">
      <Switch>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/projects'>
          <Projects />
        </Route>
        <Route exact path='/resume'>
          <Resume />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
