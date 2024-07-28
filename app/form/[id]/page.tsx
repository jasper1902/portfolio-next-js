import React from "react";
import Form from "../Form";
import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "@/app/components/Container";

const page = async ({ params }: { params: { id: string } }) => {
  const currentUser = await getCurrentUser();
  return (
    <Container>
      <Form currentUser={currentUser} projectId={params.id} />
    </Container>
  );
};

export default page;
