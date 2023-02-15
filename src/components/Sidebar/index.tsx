import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Books, Headset, House, List, UserCircle } from "phosphor-react";
import {
  Container,
  Logo,
  SidebarLink,
  SidebarLinks,
  ToggleButton,
} from "./styles";

export default function Sidebar() {
  const [path, setPath] = useState("");
  const [open, setOpen] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname) {
      setPath(pathname.split("/")[1]);
    }
  }, [pathname]);

  return (
    <Container open={open}>
      <ToggleButton onClick={() => setOpen((prevState) => !prevState)}>
        <List size={24} />
      </ToggleButton>
      <Logo open={open}>
        <img src="https://cdn.worldvectorlogo.com/logos/builders-club.svg"></img>
        <strong>NAME</strong>
      </Logo>
      <SidebarLinks>
        <SidebarLink to="/" open={open} active={!path}>
          <House size={24} />
          <span>Home</span>
        </SidebarLink>
        <SidebarLink to="/courses" open={open} active={path === "courses"}>
          <Books size={24} />
          <span>Courses</span>
        </SidebarLink>
        <SidebarLink to="/profile" open={open} active={path === "profile"}>
          <UserCircle size={24} />
          <span>Profile</span>
        </SidebarLink>
        <SidebarLink to="/support" open={open} active={path === "support"}>
          <Headset size={24} />
          <span>Support</span>
        </SidebarLink>
      </SidebarLinks>
    </Container>
  );
}
// https://www.pngarts.com/files/3/Avatar-PNG-Pic.png
