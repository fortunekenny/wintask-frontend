import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { FormRow } from "../components";

const SignInPage = () => {
  return (
    <Wrapper>
      <form action="">
        <h4>Sign-In</h4>
        <FormRow
          type="email"
          name="email"
          labelText="email"
          defaultValue="kent@you.com"
        />
        <FormRow
          type="password"
          name="password"
          labelText="password"
          defaultValue="secret"
        />
      </form>
      <button type="submit" className="">
        submit
      </button>
      <button type="button" className="">
        explore app
      </button>
      <p>
        Not yet a member?
        <Link to="/signup" className="">
          Register
        </Link>
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: skyblue;
`;

export default SignInPage;
