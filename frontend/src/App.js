import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/home";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Home} exact />
      </div>
    </Router>
  );
}

export default App;
