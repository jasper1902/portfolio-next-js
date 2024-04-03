import React from "react";
import Form from "./Form";
import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "../components/Container";

const page = async () => {
    const currentUser = await getCurrentUser();
  return (
    <Container>
      <Form currentUser={currentUser}/>
    </Container>
  );
};

export default page;
