import { Moon, SignOut, Sun, User } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { switchTheme } from "../../store/slices/themeSlice";
import { signOut } from "../../store/slices/userSlice";

import { ButtonsContainer, Container, ToolbarButton } from "./styles";

function Toolbar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { mode } = useAppSelector((state) => state.theme);

  return (
    <Container>
      <ButtonsContainer>
        <ToolbarButton onClick={() => dispatch(switchTheme())}>
          {mode === "dark" ? <Moon size={24} /> : <Sun size={24} />}
        </ToolbarButton>
        <ToolbarButton onClick={() => navigate("/profile")}>
          <User size={24} />
        </ToolbarButton>
        <ToolbarButton onClick={() => dispatch(signOut())}>
          <SignOut size={24} />
        </ToolbarButton>
      </ButtonsContainer>
    </Container>
  );
}

export default Toolbar;
