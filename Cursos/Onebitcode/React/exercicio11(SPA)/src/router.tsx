import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { Cart } from "./pages/Cart";
import AdminHome from "./pages/AdminHome";
import RootLayout from "./components/RootLayout";
import Product from "./pages/Product";
import ProductBoundary from "./errorBoundaries/ProductBoundary";
import { loadProduct } from "./loaders/products";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [{
            index: true,
            element: <Home />
        },
        {
            path: "products",
            element: <Products />
        },
        {
            path:`products/:productId`,
            element:<Product />,
            loader: loadProduct,
            errorElement: <ProductBoundary />
        },
        {
            path: "cart",
            element: <Cart />
        }]
    },
    {
        path: "/admin",
        element: <AdminHome />
    }
])

export default router