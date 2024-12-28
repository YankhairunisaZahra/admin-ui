/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Icon } from "../Elements/Icon";
import Logo from "../Elements/Logo";
import { useContext } from "react";
import { useState } from "react";
import { ThemeContext } from "../../context/themeContext";
import { AuthContext } from "../../context/authContext";
import axios from "axios";

const Navbar = () => {
  const themes = [
    { name: "theme-green", bgcolor: "bg-[#299D91]", color: "#299D91" },
    { name: "theme-blue", bgcolor: "bg-[#1E90FF]", color: "#1E90FF" },
    { name: "theme-purple", bgcolor: "bg-[#6A5ACD]", color: "#6A5ACD" },
    { name: "theme-pink", bgcolor: "bg-[#DB7093]", color: "#DB7093" },
    { name: "theme-brown", bgcolor: "bg-[#8B4513]", color: "#8B4513" },
  ];

  const { theme, setTheme } = useContext(ThemeContext);
  // const [theme, setTheme] = useState(themes[0]);

  const navigate = useNavigate();
  const { setIsLoggedIn, setName, name } = useContext(AuthContext);
  const refreshToken = localStorage.getItem("refreshToken");

  const Logout = async () => {
    try {
      await axios.get("https://jwt-auth-eight-neon.vercel.app/logout", {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      });

      setIsLoggedIn(false);
      setName("");
      localStorage.removeItem("refreshToken");

      navigate("/login");
    } catch (error) {
      setIsLoading(false);

      if (error.response) {
        setOpen(true);
        setMsg({ severity: "error", desc: error.response.data.msg });
      }
    }
  };

  const menus = [
    {
      id: "overview",
      link: "/",
      icon: <Icon.Overview />,
      label: "Overview",
    },
    {
      id: "balance",
      link: "/balance",
      icon: <Icon.Balance />,
      label: "Balance",
    },
    {
      id: "transaction",
      link: "/transaction",
      icon: <Icon.Transaction />,
      label: "Transaction",
    },
    {
      id: "bills",
      link: "/bills",
      icon: <Icon.Bill />,
      label: "Bills",
    },
    {
      id: "expencess",
      link: "/expenses",
      icon: <Icon.Expenses />,
      label: "Expencess",
    },
    {
      id: "goals",
      link: "/goals",
      icon: <Icon.Goals />,
      label: "Goals",
    },
    {
      id: "settings",
      link: "/settings",
      icon: <Icon.Settings />,
      label: "Settings",
    },
  ];

  return (
    <div className={`bg-defaultBlack`}>
      <nav className="text-white sm:w-72 w-28 min-h-screen px-7 py-12 flex flex-col justify-between">
        <div>
          {/* Logo */}
          <NavLink to="/" className="flex justify-center mb-10">
            <Logo variant="text-primary text-sm sm:text-2xl" />
          </NavLink>

          {/* Menu Links */}
          {menus.map((menu) => (
            <NavLink
              key={menu.id}
              to={menu.link}
              className={({ isActive }) =>
                isActive
                  ? "flex bg-primary text-white font-bold px-4 py-3 rounded-md"
                  : "flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md"
              }
            >
              <div className="mx-auto sm:mx-0">{menu.icon}</div>
              <div className="ms-3 hidden sm:block">{menu.label}</div>
            </NavLink>
          ))}
        </div>

        {/* Theme Selector */}
        <div className="md:flex md:gap-2">
          Themes
          {themes.map((t) => (
            <div
              key={t.name}
              className={`${t.bgcolor} md:w-6 h-6 rounded-md cursor-pointer mb-2`}
              onClick={() => setTheme(t)}
            ></div>
          ))}
        </div>

        {/* Logout and Profile Section */}
        <div className="sticky bottom-12 mx-auto w-full">
          {/* Logout Button */}
          <Link onClick={Logout}>
            <div className="flex bg-special-bg3 px-4 py-3 rounded-md hover:text-white">
              <div className="mx-auto sm:mx-0 text-white">
                {<Icon.Logout />}
              </div>
              <div className="ms-3 hidden sm:block">Logout</div>
            </div>
          </Link>

          {/* Divider */}
          <div className="border-b my-10 border-b-special-bg"></div>

          {/* Profile Info */}
          <div className="flex items-center space-x-3">
            {/* Profile Picture */}
            <div>
              <img
                src="images/profile.png"
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
            </div>
            {/* Profile Name and View */}
            <div className="hidden sm:block">
              <div className="text-white font-bold">{name}</div>
              <div className="text-xs">View Profile</div>
            </div>
            {/* Kebab Menu */}
            <div className="hidden sm:block self-center justify-self-end">
              {<Icon.KebabMenu />}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
// <div className={`bg-defaultBlack ${theme.name}`}>
//   <nav className="text-white text-special-bg2 sm:w-72 w-28 min-h-screen px-7 py-12 flex flex-col justify-between">
//     <div>
//       <NavLink to="/" className="flex justify-center mb-10">
//         <Logo variant="text-primary text-sm sm:text-2xl" />
//       </NavLink>
//       {menus.map((menu) => (
//         <NavLink
//           key={menu.id}
//           to={menu.link}
//           className={({ isActive }) =>
//             isActive
//               ? "flex bg-primary text-primary font-bold px-4 py-3 rounded-md"
//               : "flex hover:bg-special-bg3 hover-text-primary px-4 py-3 rounded-md"
//           }>
//           <div className="mx-auto sm:mx-0">{menu.icon}</div>
//           <div className="ms-3 hidden sm:block">{menu.label}</div>
//         </NavLink>
//       ))}
//     </div>
//     <div className="md:flex md:gap-2">
//       Themes
//       {themes.map((t) => (
//         <div
//           key={t.name}
//           className={`${t.bgcolor} md:w-6 h-6 rounded-md cursor-pointer mb-2`}
//           onClick={() => setTheme(t)}
//         ></div>
//       ))}
//     </div>
//     <div className="stiky bottom-12"></div>
//     <div className="mx-auto w-full">
//       <Link onClick={Logout}>
//         <div className="flex bg-special-bg3 px-4 py-3 rounded-md hover:text-primary">
//           <div className="mx-auto sm:mx-0 text-primary">
//             {<Icon.Logout />}
//           </div>
//           <div className="ms-3 hidden sm:block">Logout</div>
//         </div>
//       </Link>
//       <div className="border-b my-10 border-b-special-bg"></div>
//       <div className="flex items-center space-x-3">
//         <div>
//           <img
//             src="images/profile.png"
//             alt="Profile"
//             className="w-12 h-12 rounded-full"
//           />
//         </div>
//         <div className="hidden sm:block">
//           <div className="text-primary font-bold">{name}</div>
//           <div className="text-xs">View Profile</div>
//         </div>
//         <div className="hidden sm:block self-center justify-self-end">
//           {<Icon.KebabMenu />}
//         </div>
//       </div>
//     </div>
//   </nav>
// </div>

