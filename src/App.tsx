import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/home.tsx";
import {RecoilRoot} from "recoil";
import Favourites from "./pages/favourites.tsx";
import ErrorPage from "./pages/error.tsx";
const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/> ,
            errorElement: <ErrorPage/>
        },
        {
            path: '/favourite',
            element: <Favourites/>
        }


    ]);

    return (
        <div>
            <RecoilRoot>
                <RouterProvider router={router} />
            </RecoilRoot>
        </div>
    );
};

export default App;