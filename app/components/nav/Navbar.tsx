import { getCurrentUser } from "@/actions/getCurrentUser";
import NavbarClient from "./NavbarClient";

const Nav = async () => {
  const currentUser = await getCurrentUser()
  return (
    <>
      <NavbarClient currentUser={currentUser}/>
    </>
  );
};

export default Nav;
