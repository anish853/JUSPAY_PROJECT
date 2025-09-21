import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import SidebarTopbar from "./components/SidebarTopbar";
import OrderList from "./pages/OrderList";
import Home from "./pages/Home";
import { AppProvider } from "./contexts/AppContext";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SidebarTopbar />,
      children: [
        { index: true, element: <Home /> },
        { path: "orderList", element: <OrderList /> },
      ],
    },
  ]);
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}
export default App;