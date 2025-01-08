import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("gupshup-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignUp;

function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields.");
    return false;
  }
  if (password != confirmPassword) {
    toast.error("Password don't match!");
    return false;
  }
  if (password.length < 8) {
    toast.error("Password should be atleast 8 characters.");
    return false;
  }

  const specialCharacter = /[!@#$%^&*(),.?":{}|<>]/;

  if (!specialCharacter.test(password)) {
    toast.error("Password should contain atleast one special character.");
    return false;
  }

  return true;
}
