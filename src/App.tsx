import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {},
      ////////////////// Auth //////////////////
    ],
  },
]);
export default router;
