/* eslint-disable no-unused-vars */
import LabeledInput from "../Elements/LabeledInput";
import CheckBox from "../Elements/CheckBox";
import Button from "../Elements/Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext, useState } from "react";
import CustomizedSnackbars from "../Elements/SnackBar";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { NotifContext } from "../../context/notifContext";
import { ModeContext, useMode } from "../../context/modeContext";

const FormSignIn = () => {
    const { setMsg, msg, setOpen, setIsLoading } = useContext(NotifContext);
    const { setIsLoggedIn, setName } = useContext(AuthContext);
    const { isDarkMode, toggleMode } = useMode()

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        mode: "onChange",
    });

    const onFormSubmit = async (data) => {
        setIsLoading(true);
        try {
            const response = await axios.post(
                "https://jwt-auth-eight-neon.vercel.app/login",
                {
                    email: data.email,
                    password: data.password,
                }
            );

            setIsLoading(false);
            setOpen(true);
            setMsg({ severity: 'success', desc: 'Login Success' })

            const decoded = jwtDecode(response.data.refreshToken);
            console.log(decoded);
            localStorage.setItem("username", decoded.name);
            setOpen(true);
            setMsg({ severity: "success", desc: "Login Success" });
            localStorage.setItem("refreshToken", response.data.refreshToken);
            setIsLoggedIn(true);
            setName(decoded.name);


            navigate("/");

        } catch (error) {
            setIsLoading(false);
            if (error.response) {
                setOpen(true);
                setMsg({ severity: "error", desc: error.response.data.msg });
            }
        }
    };
    const onErrors = (errors) => console.error(errors);


    return (
        <form onSubmit={handleSubmit(onFormSubmit, onErrors)} className={`${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="mb-6">
                <LabeledInput
                    label="Email address"
                    type="email"
                    placeholder="hello@example.com"
                    name="email"
                    register={{
                        ...register("email", {
                            required: "Email address is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address format",
                            },
                        }),
                    }}
                />
                {errors?.email && (
                    <div className="text-center text-red-500">{errors.email.message}</div>
                )}
            </div>
            <div className="mb-6">
                <LabeledInput
                    label="Password"
                    type="password"
                    placeholder="*************"
                    name="password"
                    register={{
                        ...register("password", { required: "Password is required" }),
                    }}
                />
                {errors?.password && (
                    <div className="text-center text-red-500">{errors.password.message}</div>
                )}
            </div>
            <div className="mb-3">
                <CheckBox label="Keep me signed in" name="status" />
            </div>
            <Button
                variant={`${!isValid ? "bg-gray-05" : "bg-primary zoom-in"} w-full text-white`}
                type="submit"
                disabled={!isValid ? "disabled" : ""}
                className="text-dark"
            >
                Login
            </Button>

            {msg && (
                <CustomizedSnackbars
                    severity={msg.severity}
                    message={msg.desc}
                    open={open}
                    setOpen={setOpen}
                />
            )}
        </form >
    );
};

export default FormSignIn;