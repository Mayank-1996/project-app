import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./shared/components/Header/Header";
import { routes } from "./routes/routeConfig";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={<route.Component />} />
        ))}
      </Routes>
    </>
  );
}

export default App;
