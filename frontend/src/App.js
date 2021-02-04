import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Course from "./components/course";

function App() {
  return (
    <Router>
    <Switch>
      <div className="App">
        <Route path="/" component={Home} />
        <Route path="/course" component={Course} />

      </div>
      </Switch>
    </Router>
  );
}

export default App;
