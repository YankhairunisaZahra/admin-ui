/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Header from "../../components/fragments/Header";
import Navbar from "../../components/fragments/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { NotifContext } from "../../context/notifContext";
import SimpleBackdrop from "../Elements/Backdrop";
import CustomizedSnackbars from "../Elements/SnackBar";
import { useMode } from "../../context/modeContext";

const MainLayout = (props) => {
  const { children } = props;
  const { theme } = useContext(ThemeContext);
  const { msg, setMsg, open, setOpen, isLoading, setIsLoading } = useContext(NotifContext)
  const { isDarkMode } = useMode()
  return (
    // <div className={`flex bg-special-mainBg w-screen min-h-screen max-w-full `}>
    <div className={`flex bg-special-mainBg w-screen min-h-screen max-w-full ${theme.name}`}>
      {/* navbar start*/}
      <Navbar />
      {/* navbar end*/}
      <div className="w-screen">
        {isLoading && (
          <SimpleBackdrop isLoading={isLoading} setIsLoading={setIsLoading} />
        )}
        {msg && (
          <CustomizedSnackbars
            severity={msg.severity}
            message={msg.desc}
            open={open}
            setOpen={setOpen}
          />
        )}
        {/* header start*/}
        <Header />
        {/* header end*/}
        {/* content start*/}
        <main className={`px-6 py-4 ${isDarkMode ? "dark-mode" : "light-mode"}`}>{children}</main>
        {/* content end*/}
      </div>
    </div>
  );
};

export default MainLayout;
