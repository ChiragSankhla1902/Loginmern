import './App.css';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Form from "./component/Form/Form";
import Details from "./component/Details/details";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Details}/>
        <Route path="/auth" exact component={Form}/>
      </Switch>
  </BrowserRouter>
  );
}

export default App;
