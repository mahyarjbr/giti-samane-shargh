import React, { useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "./../redux/Actions/loginAction";
import MessageBox from "../components/MessageBox";

const LoginScreen = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [, forceUpdate] = useState();
  const dispatch = useDispatch();
  const {  error } = useSelector((state) => state.login);

  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "پر کردن این فیلد الزامی است",
      },
      element: (messages) => (
        <div style={{ color: "red", direction: "rtl" }}>{messages}</div>
      ),
    })
  );
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      if (validator.current.allValid()) {
        dispatch(loginAction(username, password));
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (err) {
      console.log(err.message.response);
    }
  };

  return (
    <>
     {error ? (
        <div className='d-flex justify-content-center'  >
          <MessageBox variant="danger">{error.message}</MessageBox>
        </div>
      ) : null}
    <div className="d-flex justify-content-center">
     
      <form className="form" onSubmit={(e) => submitHandler(e)}>
        <div >
          <h1 style={{marginLeft:"108px"}}>صفحه ورود</h1>
        </div>

        <div>
          <label className="d-rtl" htmlFor="username">
            نام کاربری:
          </label>
          <br />
          <input
            placeholder="نام کاربری خود را وارد کنید"
            className="login--input"
            type="text"
            id="name"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              validator.current.showMessageFor("username");
            }}
          ></input>
          {validator.current.message("username", username, "required")}
        </div>

        <div>
          <label className="d-rtl" htmlFor="password">
            پسورد:
          </label>
          <br />
          <input
            className="login--input"
            type="password"
            id="password"
            placeholder="پسورد خود را وارد کنید"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validator.current.showMessageFor("password");
            }}
          ></input>
          {validator.current.message("password", password, "required")}
        </div>

        <div>
          <label />
          <button
            style={{ marginLeft: "40px" }}
            className=" primary d-rtl"
            type="submit"
          >
            ورود
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default LoginScreen;
