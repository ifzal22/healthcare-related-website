import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import AuthProvider from './Components/Context/AuthProvider';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import LOging from './Components/LOging/LOging';
import Register from './Components/LOging/Register';
import Details from './Components/Services/Details/Details';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="">
      <AuthProvider>
     <Router>
     <Header></Header>  
       <Switch>
         <Route exact path="/">
<Home></Home>
         </Route>
         <Route exact path="/home">
           <Home></Home>
         </Route>
         


         <Route exact path="/services">
           <Services></Services>
         </Route>

         <Route exact path="/services/:id">
           <Details></Details>
         </Route>
         <Route exact path="/about">
           <About></About>
         </Route>

         <Route exact path="/LOging">
           <LOging> </LOging>
          
         </Route>
         <Route exact path ="/Register">
           <Register></Register>
         </Route>
       </Switch>
    
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
