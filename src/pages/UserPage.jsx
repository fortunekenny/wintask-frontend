import { Outlet, redirect, useLoaderData } from "react-router-dom";
import { styled } from "styled-components";
import { Navbar } from "../components";
import { createContext, useContext } from "react";
import customFetch from "../utils/customFetch";

export const loader = async () => {
  // loaders ar used to get data from the backend
  try {
    const { data } = await customFetch.get("/users/showMe");
    return data;
  } catch (error) {
    console.log(error);
    return null;
    // return redirect("/");
  }
};

const UserContext = createContext();

const UserPage = () => {
  const data = useLoaderData();
  console.log(data);

  //temp
  const user = { name: "paul", role: "founder" };

  //   const [showAdmin, setShowAdmin] = useState(false);
  // const [isDarkTheme, setIsDarkTheme] = useState(false);
  //   const toggleDarkTheme = () => {
  //     console.log("toggle dark theme");
  //   };

  const logoutUser = async () => {
    console.log("logout user");
  };

  return (
    <UserContext.Provider value={{ user, logoutUser }}>
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
