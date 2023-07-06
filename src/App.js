import './App.css';
import './Home';
import Login from './Login';

function App() {
  return (
    
    <>
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
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">Login</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            View
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">All</a></li>
            <li><a class="dropdown-item" href="#">Buy</a></li>
            <li><a class="dropdown-item" href="#">Sale</a></li>
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

  <img class="img1"src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg" width="1210px" height="700px" alt="Description of the image"/>
  <span class="quote1">Happy Home</span>
<h2>Top Picks</h2>
<div class="img2">
  <img class="rounded float-start"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPkZVj1w9e_MNDSh97EIa5sDVLFBcgyoZ1A&usqp=CAU" width="250px" height="150px"/>
    <p>Dwarka</p>
    </div>
<div class="img3">
  <img class="rounded mx-auto d-block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzM5aDv7z-RMheIQWMkh25OVIW73assZL8uw&usqp=CAU" width="250px" height="150px"/>
    <p>Patel Nagar</p>
    </div>
  <div class="img4">
  <img class="rounded float-end" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRt7xpT1PREv7b8ITTyy15sqUnl883DUlTQ&usqp=CAU" width="250px" height="150px"/>
    <p>Janak Puri</p>
  </div>
  <div class="img5">
  <img class="rounded float-end" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRt7xpT1PREv7b8ITTyy15sqUnl883DUlTQ&usqp=CAU" width="250px" height="150px"/>
    <p>Maya Puri</p>
  </div>
  <div class="border border-end-0">
        <p class="pyp">Post Your Property</p>
        <button type="button" class="btn btn-info">Add</button>
    </div>

    <h2>Recently Viewed</h2>
<div class="img6">
  <img class="rounded float-start"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPkZVj1w9e_MNDSh97EIa5sDVLFBcgyoZ1A&usqp=CAU" width="250px" height="150px"/>
    <p>Dwarka</p>
    </div>
<div class="img7">
  <img class="rounded mx-auto d-block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzM5aDv7z-RMheIQWMkh25OVIW73assZL8uw&usqp=CAU" width="250px" height="150px"/>
    <p>Patel Nagar</p>
    </div>
  <div class="img8">
  <img class="rounded float-end" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRt7xpT1PREv7b8ITTyy15sqUnl883DUlTQ&usqp=CAU" width="250px" height="150px"/>
    <p>Janak Puri</p>
  </div>
  <div class="img9">
  <img class="rounded float-end" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRt7xpT1PREv7b8ITTyy15sqUnl883DUlTQ&usqp=CAU" width="250px" height="150px"/>
    <p>Maya Puri</p>
  </div>
  
  <footer class="foot">Copyrigth &copy; Housing Website</footer>
    </>
    
  );
}

export default App;
