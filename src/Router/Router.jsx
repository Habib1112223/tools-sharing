import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Error from "../components/Error/Error";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import MyServices from "../Pages/MyServices/MyServices";
import AddService from "../Pages/AddService/AddService";
import MySchedules from "../Pages/MySchedules/MySchedules";
import ServicePage from "../Pages/ServicePage/ServicePage";
import ManageService from "../Pages/ManageService/ManageService";
import BookService from "../Pages/BookService/BookService";
import SingleService from "../Pages/SingleService/SingleService";

const router = createBrowserRouter([
      {
        path: "/",
        errorElement:<Error></Error>,
        element:<Main></Main>,
        children:[
            {
                  path:'/',
                  element:<Home></Home>
            },
            {
                  path:"/services",
                  element:<Services></Services>
            },
            {
                  path:'/dashboard',
                  element:<Dashboard></Dashboard>
            },
            {
                  path:'/login',
                  element:<Login></Login>
            },
            {
                  path:'/register',
                  element:<Register></Register>
            },
            {
                  path:"/manageService",
                  element:<ManageService></ManageService>
            },
            {
                  path:'/my-services',
                  element:<MyServices></MyServices>
            },
            {
                  path:'/add-services',
                  element:<AddService></AddService>
            },
            {
                  path:'/my-schedules',
                  element: <MySchedules></MySchedules>
            },
            {
                  path:"/service/:id",
                  loader: async({params}) => fetch(`https://y-rust-psi.vercel.app/services/${params.id}`),
                  element: <SingleService></SingleService>
            },
            {
                  path:'/services/:id',
                  element: <ServicePage></ServicePage>,
                  loader: ({params}) => fetch(`https://y-rust-psi.vercel.app/services/${params.id}`)
            },
        ]
      },
    ]);


export default router;