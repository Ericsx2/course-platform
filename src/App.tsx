import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { router } from "./routes";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
import { sessionSignIn } from "./store/slices/userSlice";

import { GlobalStyles } from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useAppDispatch();
  const { theme, mode } = useAppSelector((state) => state.theme);

  useEffect(() => {
    const data = localStorage.getItem("user_state");
    if (data) {
      const user = JSON.parse(data);
      dispatch(sessionSignIn(user));
      console.log(user);
    }

    window.addEventListener("close", () => {
      localStorage.removeItem("user_state");
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme={mode === "dark" ? "dark" : "light"}
      />
    </ThemeProvider>
  );
}

export default App;
