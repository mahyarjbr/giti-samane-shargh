import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomeScreen = (props) => {
  const login = useSelector((state) => state.login);
  const { userInfo } = login;

  return (
    <>
      <h1 className="text-center">به گیتی سامانه شرق خوش آمدید</h1>
      <div className="d-flex justify-content-center">
        {userInfo ? (
          <Link className='link ' to="/posts">دیدن پست ها</Link>
        ) : (
          <Link className='link' to="/login">صفحه ورود</Link>
        )}
      </div>
    </>
  );
};

export default HomeScreen;
