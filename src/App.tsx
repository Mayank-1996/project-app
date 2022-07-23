import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./shared/components/Header/Header";
import FrontPage from "./shared/components/FrontPage/FrontPage";
import { routes } from "./routes/routeConfig";

function App() {
  return (
    <>
      <Header />
      <FrontPage></FrontPage>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={<route.Component />} />
        ))}
      </Routes>
    </>
  );
}

export default App;
