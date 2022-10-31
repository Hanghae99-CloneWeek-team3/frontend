import React from "react";
import LoginForm from "../components/Login";
import SignupForm from "../components/Signup";

const Modal = ({
  text,
  closeModal,
  setIsLoginModalOpen,
  setIsSignupModalOpen,
  setIsLogin,
}) => {
  return (
    <>
      {text === "로그인" ? (
        <LoginForm
          closeModal={closeModal}
          setIsLoginModalOpen={setIsLoginModalOpen}
          setIsSignupModalOpen={setIsSignupModalOpen}
          setIsLogin={setIsLogin}
        />
      ) : (
        <SignupForm
          closeModal={closeModal}
          setIsLoginModalOpen={setIsLoginModalOpen}
          setIsSignupModalOpen={setIsSignupModalOpen}
        />
      )}
    </>
  );
};

export default Modal;
