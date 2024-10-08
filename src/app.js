import React, { lazy, Suspense, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
const About = lazy(()=> import("./components/About"));
import Error from './components/Error';
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile"
import Shimmer from "./components/Shimmer";
import UserContext from "./components/utility/UserContext";
import {Provider} from "react-redux";
import store from "./components/utility/store";
import Cart from "./components/Cart";
// import Instamart from "./components/Instamart";
// dynamic import // import like this instead of above import for chunking or code splitting or lazy loading
const Instamart = lazy(()=> import("./components/Instamart"));

const AppLayout =()=>{

  const [user, setUser] = useState({name: "Vanshika Agrawal", email: "abc@gmail.com"});

    return (
      <Provider store={store}>
        <UserContext.Provider value={{user:user, setUser:setUser}}>
          <Header/>
          <Outlet/>
          <Footer/>
        </UserContext.Provider>
      </Provider>
    );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About/>
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile/>
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <Instamart/>
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart/>
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute}/>);