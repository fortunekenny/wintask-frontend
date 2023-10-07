import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import { Navbar } from "../components";
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserPage = () => {
  //temp
  const user = { name: "paul" };

  const [showAdmin, setShowAdmin] = useState(false);
  // const [isDarkTheme, setIsDarkTheme] = useState(false);
  //   const toggleDarkTheme = () => {
  //     console.log("toggle dark theme");
  //   };
  const logoutUser = async () => {
    console.log("logout user");
  };

  return (
    <UserContext.Provider value={{ user, showAdmin, setShowAdmin, logoutUser }}>
      <Wrapper>
        <h2>UserPage</h2>
        <div>
          <Navbar />
          <div>
            <Outlet />
          </div>
        </div>
      </Wrapper>
    </UserContext.Provider>
  );
};

const Wrapper = styled.div`
  background: skyblue;
`;

export const useUserContext = () => useContext(UserContext);
export default UserPage;
