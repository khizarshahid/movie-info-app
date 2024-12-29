import React from "react"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import Favorites from "./pages/Favorites"
import MovieCard from "./components/MovieCard"
import { MovieProvider } from "./contexts/MovieContexts"
import NavBar from "./components/NavBar"
import "./css/App.css"

function App() {

  return (
    <MovieProvider>
      <NavBar />
    <main className="main-content">
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/favorites" element = {<Favorites/>}/>
      </Routes>
    </main>
    </MovieProvider>
  )
}

export default App
