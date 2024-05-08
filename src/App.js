import { BrowserRouter, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.scss";
import Layout from "./Layout.jsx";
import HrContextProvider from "./contexts/HrContext/HrContext";
import Account from "./pages/Account/Account";
import Dashboard from "./pages/Dashboard/Dashboard";
import Leave from "./pages/Leave/Leave.jsx";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <HrContextProvider>
            <Route exact path="/" component={Login} />
            <Route exact path='/dashboard' render={() => <Layout><Dashboard /></Layout>} />
            <Route exact path="/leave" render={() => <Layout><Leave /></Layout>} />
            <Route exact path="/account" render={() => <Layout><Account /></Layout>} />
            
            {/* <Route exact path="/dashboard" component={Test} /> */}
            {/* <Route exact path="/account" component={Test} /> */}
            {/* <Route exact path="/leave" component={Test} /> */}
            {/* <Route exact path="/projects" render={() => <Layout><Projects /></Layout>} />
          <Route exact path="/projects/details" render={() => <Layout><ProjectDetails /></Layout>} /> */}
          </HrContextProvider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
