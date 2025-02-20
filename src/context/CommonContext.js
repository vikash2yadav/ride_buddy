import React, { createContext, useState } from "react";
export const CommonContext = createContext();

export const CommonContextProvider = ({ children }) => {
  const [modelOpen, setModelOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [messageType, setMessageType] = useState(null);
  const [snackMessage, setSnackMessage] = useState(null);
  const [currentLang, setCurrentLang] = useState("English");
  const [currentLangCode, setCurrentLangCode] = useState("eng");
  const [imageModal, setImageModal] = useState(false);
  const [profile, setProfile] = useState(null);

  return (
    <CommonContext.Provider
      value={{
        modelOpen,
        setModelOpen,
        isLoading,
        setIsLoading,
        snackOpen,
        setSnackOpen,
        snackMessage,
        setSnackMessage,
        messageType,
        setMessageType,
        isLogin,
        setIsLogin,
        currentLang,
        setCurrentLang,
        currentLangCode,
        setCurrentLangCode,
        imageModal,
        setImageModal,
        profile,
        setProfile
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};
