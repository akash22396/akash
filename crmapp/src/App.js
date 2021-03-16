import { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import User from "./pages/User";
import ProtectedRoute from "./ProtectedRoute";

function App(props) {
  let { isLoggedIn } = props.login
  useEffect(() => {
    console.log(props.login)
    // eslint-disable-next-line
  }, [props])
  return (
    <>

      <BrowserRouter>
        <h3>Hello World!</h3>
        {
          isLoggedIn === false ?
            <button onClick={() => props.loginStatus(true)}>Login</button> :
            <button onClick={() => props.loginStatus(false)}>Logout</button>
        }
        <br />
        <br />
        <Link to='/'>Home</Link>
        <Link to='/user'>User</Link>
        <Link to='/admin'>Admin</Link>
        <br />
        <br />
        <Switch>
          <Route path='/' exact component={Home} />
          <ProtectedRoute path='/user' moduleName={'user'} exact component={User} />
          <ProtectedRoute path='/admin' moduleName={'admin'} exact component={Admin} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
const mapGetStoreData = (state) => {
  return {
    login: state.loginReducer
  }
}
const mapDispatchData = (dispatch) => {
  return {
    loginStatus: (e) => dispatch({ type: 'LOGIN_STATUS', payload: e })
  }
}
export default connect(mapGetStoreData, mapDispatchData)(App);
