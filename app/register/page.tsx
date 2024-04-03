import React from "react";
import Container from "../components/Container";
import RegisterForm from "./RegisterForm";
import { getCurrentUser } from "@/actions/getCurrentUser";

type Props = {};

const Register = async (props: Props) => {
  const currentUser = await getCurrentUser();
  return (
    <Container>
      <RegisterForm currentUser={currentUser} />
    </Container>
  );
};

export default Register;