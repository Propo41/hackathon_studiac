import ThemeConfig from "./styles";
import "./styles/App.css";
import AdminRouter from "./utils/admin_routes";
import AuthRouter from "./utils/authentication_route";
import client from "./graphql";


function App() {
  console.log(localStorage);
  if (localStorage.getItem("x-studiac-access-token") !== null) {
    return (
      <ThemeConfig>
        <AdminRouter />
      </ThemeConfig>
    );
  } else {
    return (
      <ThemeConfig>
        <AuthRouter />
      </ThemeConfig>
    );
  }
}

export default App;
