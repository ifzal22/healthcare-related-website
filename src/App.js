import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import AuthProvider from './Components/Context/AuthProvider';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import LOging from './Components/LOging/LOging';
import Register from './Components/LOging/Register';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/Private/PrivateRoute';
import Details from './Components/Services/Details/Details';
import Services from './Components/Services/Services';
import SErvicesAll from './Components/Services/ServicesAll/SErvicesAll';

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
         <Route exact path="/ServicesAll">
           <SErvicesAll></SErvicesAll>
         </Route>

   <PrivateRoute exact path="/services/:id">
           <Details></Details>
         </PrivateRoute>


         <Route exact path="/about">
           <About></About>
         </Route>
         <Route exact path="/blog">
           <Blog></Blog>
         </Route>

         <Route exact path="/LOging">
           <LOging> </LOging>
          
         </Route>
         <Route exact path ="/Register">
           <Register></Register>
         </Route>

        

         <Route path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
    <Footer></Footer>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
