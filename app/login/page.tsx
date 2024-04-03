import React from "react";
import Container from "../components/Container";
import LoginForm from "./LoginForm";
import { getCurrentUser } from "@/actions/getCurrentUser";

type Props = {};

const Login = async (props: Props) => {
  const currentUser = await getCurrentUser();
  return (
    <Container>
      <LoginForm currentUser={currentUser} />
    </Container>
  );
};

export default Login;