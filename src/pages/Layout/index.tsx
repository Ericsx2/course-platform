import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";

import Sidebar from "../../components/Sidebar";
import Toolbar from "../../components/Toolbar";

import { Container, Main } from "./styles";

export default function Layout() {
  const { token } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return (
    <Container>
      <Sidebar />
      <Main>
        <Toolbar />
        <Outlet />
      </Main>
    </Container>
  );
}
