import React from 'react'
// import Login from './Login'
// import Home from './Home'
import { Link } from 'react-router-dom'

function header() {
  return (
    <div>
        <h1>Housing Website</h1>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/About">About Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Contact">Contact Us</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
            Account
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/Login">Login</Link></li>
            <li><Link class="dropdown-item" to="/Register">Register</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            View
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="#">All</Link></li>
            <li><Link class="dropdown-item" to="/Buy">Buy</Link></li>
            <li><Link class="dropdown-item" to="/Sale">Sale</Link></li>
          </ul>
        </li>
      </ul>
    </div>
    <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
  </div>
</nav>
    </div>
  )
}

export default header