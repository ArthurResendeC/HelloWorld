import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Dashboard from "./pages/Dashboard";
import ItemsRoot from "./components/ItemsRoot";
import AllItems from "./pages/Items";
import CreateItem from "./pages/CreateItem";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [{
            index: true,
            element: <Dashboard />
        },
        {
            path: "/Itens",
            element: <ItemsRoot />,
            children: [
                { index: true, element: <AllItems /> },
                { path: '/Itens/criar-item', element: <CreateItem /> },
                { path: '/Itens/:itemId', }
            ]
        }],

    }
])

export default router