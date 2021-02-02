import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { signout } from "./redux/Actions/loginAction";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import PostsScreen from "./screens/PostsScreen";
import { isEmpty } from "lodash";

function App() {
  const { userInfo } = useSelector((state) => state.login);
  const { items } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <div className="grid-container">
      <header className="header-container">
        <div>
          <h1 className="m-5">
            <Link to="/">گیتی سامانه شرق</Link>
          </h1>
        </div>
        <div className="header--links">
          {userInfo ? (
            <Link to="#" onClick={signoutHandler}>
              خروج
            </Link>
          ) : (
            <Link to="/login">ورود</Link>
          )}
        </div>
      </header>

      <main>
        <Switch>
          <Route
            path="/login"
            exact
            render={() =>
              isEmpty(items) ? <LoginScreen /> : <Redirect to="/posts" />
            }
          ></Route>
          <Route
            path="/posts"
            render={() =>
              isEmpty(userInfo) ? <Redirect to="/login" /> : <PostsScreen />
            }
          ></Route>
          <Route path="/" exact component={HomeScreen}></Route>
        </Switch>
      </main>
      <footer>
        <h2 className="text-center">طراحی برای شرکت گیتی سامانه شرق</h2>
      </footer>
    </div>
  );
}

export default App;
