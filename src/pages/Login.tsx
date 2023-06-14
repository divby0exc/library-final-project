import React, { useState, useRef, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import UserHome from "./UserHome";
import { useNavigate } from "react-router-dom";
import AuthContext, { useAuth } from "../components/provider/AuthProvider";
import GuestHome from "./GuestHome";

interface FormData {
  username: string;
  password: string;
}

const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: "onChange" });
  const [name, setName] = useState("");

  const onSubmit = handleSubmit(({ username, password }) => {
    const user = {
      username: username,
      password: password,
    };
    res(user);

    navigate("/", { replace: true });

  });

  const res = async (user: FormData) => {
    try {
      const data = await axios
        .post("http://localhost:8080/auth/login", user)
        .then((res) => {
          localStorage.setItem("token", res.data.accessToken);
          setToken(res.data.accessToken);
          console.log(res.status);
          console.log(localStorage.getItem("token"));
          setSuccess(true);
        });
    } catch (err) {
      console.log(err);
    } finally {
      setSuccess(false);
    }
  };


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center font-medium">divby0exc</div>
        <div className="text-3xl font-bold text-gray-900 mt-2 text-center">
          Login
        </div>
      </div>
      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
        <form action="" className="space-y-6" onSubmit={onSubmit}>
          <div>
            <label htmlFor="" className="text-sm font-bold text-gray-600 block">
              Username
            </label>
            <input
              {...register("username")}
              style={{ borderColor: errors.username ? "red" : "" }}
              name="username"
              type="text"
              className="v-full p-2 border-border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label htmlFor="" className="text-sm font-bold text-gray-600 block">
              Password
            </label>
            <input
              {...register("password", {
                required: true,
                minLength: 3,
                maxLength: 20,
              })}
              style={{ borderColor: errors.password ? "red" : "" }}
              type="password"
              name="password"
              className="v-full p-2 border-border-gray-300 rounded mt-1"
            />
          </div>
          <p>
            No account? Sign up{" "}
            <u>
              <b>
                <a href="#">here!</a>
              </b>
            </u>
          </p>
          <div>
            <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">
              Login
            </button>
            {errors.password && <span>Username or password is wrong</span>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
