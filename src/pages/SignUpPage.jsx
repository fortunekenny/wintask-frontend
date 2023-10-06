import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { FormRow } from "../components";

const SignUpPage = () => {
  return (
    <Wrapper>
      <form action="">
        <h4>Register</h4>
        <FormRow type="text" name="name" labelText="name" defaultValue="kent" />
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
      <p>
        Already a member?
        <Link to="/signin" className="">
          Sign-In
        </Link>
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: skyblue;
`;

export default SignUpPage;
