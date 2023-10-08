import { NavLink } from "react-router-dom";
import { useUserContext } from "../pages/UserPage";
import { styled } from "styled-components";
import LogoutComponent from "./LogoutComponent";

const Navbar = () => {
  const { user } = useUserContext();
  return (
    <Wrapper>
      <h3>Navbar</h3>
      <NavLink
        to="/userpage/admin"
        className={user.role === "founder" ? "showadmin" : "adminlink"}
      >
        Admin
      </NavLink>
      <div>
        <h5 className="">
          <span>Welcome</span> {user.name}
        </h5>
        <LogoutComponent />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: skyblue;

  .adminlink {
    visibility: hidden;
  }
  .showadmin {
    text-decoration: none;
    visibility: visible;
  }
`;

export default Navbar;
