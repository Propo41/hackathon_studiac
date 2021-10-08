import ThemeConfig from "./styles/global";
import PrivateRouter from "./routes/private_routes";
import PublicRouter from "./routes/public_routes";

function App() {
  console.log(localStorage);

  if (localStorage.getItem("x-studiac-access-token") !== null) {
    return (
      <ThemeConfig>
        <PrivateRouter />
      </ThemeConfig>
    );
  } else {
    return (
      <ThemeConfig>
        <PublicRouter />
      </ThemeConfig>
    );
  }
}

export default App;
