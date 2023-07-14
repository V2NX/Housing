import './App.css';


function Home() {const handleClick = () => {
    // Handle click event here (e.g., navigate to a different page)
    console.log('Image clicked!');
  };
    return(
        <>
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
        <a href="/Apartment" target="_blank" rel="noopener noreferrer">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRt7xpT1PREv7b8ITTyy15sqUnl883DUlTQ&usqp=CAU" width="250px" height="150px"
          alt="Image"
          onClick={handleClick}
          style={{ cursor: 'pointer' }}
        />
      </a>
        </div>
        <div class="img9">
            <img class="rounded float-end" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRt7xpT1PREv7b8ITTyy15sqUnl883DUlTQ&usqp=CAU" width="250px" height="150px"/>
            <p>Maya Puri</p>
        </div>
   
  </>
    )
}
export default Home
