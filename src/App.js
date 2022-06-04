import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Products from "./Components/Products";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/products/:id" component={Product}/>
        <Route exact path="/cart" component={Cart}/>
      </Switch>
    </>
  );
}

export default App;
