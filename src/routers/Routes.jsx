import {BrowserRouter as Router, Routes ,Route, } from "react-router-dom"

import {Home} from "../pages/Home"
import { Products } from "../pages/Products"
import { Pokemon } from "../pages/Pokemon"
import { RickMorty } from "../pages/RickMorty"
import { NavBar } from "../components/NavBar"
import { Movies } from "../components/Movies"




export const MyRoutes = () => {
  return (
   <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/productos" element = {<Products/>} />
        <Route path="/pokemon" element = {<Pokemon/>} />
        <Route path="/rick" element = {<RickMorty/>} />
        <Route path="/movies" element = {<Movies/>} />
      </Routes>
    </Router>
  )
}
