import { Component } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import About from "./Components/Navbar/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";


const myRouter = createBrowserRouter([

  {path:'/home', element: <Layout/>, children:[

    {index:true , element: <Home/>},
    {path:'about' , element:<About/>},
    {path:'portfolio' , element:<Portfolio/>},
    {path:'contact' , element:<Contact/>}

  ]}

]);

export class App extends Component{

  state = {}

  render(){
  
    return <>

    <RouterProvider router={myRouter}/>

  </>
  }

}
