let Landing = () => {
  return (
    <>
      <div className="pb-2">
        {/* header */}
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"> {/* Bisa diganti dengan logo */}
              <img src="https://png.pngtree.com/png-vector/20240515/ourmid/pngtree-open-book-logo-png-image_12467719.png" alt="Bootstrap" width="30" height="24"/>
            </a> 
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#books">Products</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About Us</a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div className="container">
        {/* content */}
        {/* <h1>Hello World!</h1> */}
        <div id="carouselExample" class="carousel carousel-dark slide">
          <div class="carousel-inner" style={{ height: "400px" }}>
            <div class="carousel-item active">
              <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-banner-ad-template-design-369952ddd08de78a01481898e6bb35b1_screen.jpg?ts=1732692056" class="d-block mx-auto object-fit-cover" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-review-banner-post-design-template-edccf16ae1f0905fc86db31590a6d236_screen.jpg?ts=1732695622" class="d-block mx-auto object-fit-cover" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="https://img.freepik.com/free-psd/world-book-day-social-media-post-template_47987-15404.jpg" class="d-block mx-auto object-fit-cover" alt="..."/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <hr />
        <div class="card w-100 overflow-auto">
          <div class="card-header">
            Recommended Books
          </div>
          <div className="card-body">
            <div className="d-flex">
              <div class="card mx-2 w-25 flex-shrink-0">
                <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1489732961i/1362193.jpg" style={{ height:"490px" }} class="card-img-top object-fit-cover" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card mx-2 w-25 flex-shrink-0">
                <img src="https://www.pustakakita.com/wp-content/uploads/2017/01/Sejarah-Indonesia-II-356x356.jpg" style={{ height:"490px" }} class="card-img-top object-fit-cover" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card mx-2 w-25 flex-shrink-0">
                <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1489732961i/1362193.jpg" style={{ height:"490px" }} class="card-img-top object-fit-cover" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card mx-2 w-25 flex-shrink-0">
                <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1489732961i/1362193.jpg" style={{ height:"490px" }} class="card-img-top object-fit-cover" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card mx-2 w-25 flex-shrink-0">
                <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1489732961i/1362193.jpg" style={{ height:"490px" }} class="card-img-top object-fit-cover" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="card">
          <div class="card-header" id="books">
            List Books
          </div>
          <div class="card-body overflow-auto mh-25">
            <div class="row">
              <div class="col-sm-3 mb-3">
                <div class="card">
                  <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1489732961i/1362193.jpg" class="card-img-top object-fit-cover" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                  <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1489732961i/1362193.jpg" class="card-img-top object-fit-cover" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                  <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1489732961i/1362193.jpg" class="card-img-top object-fit-cover" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                  <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1489732961i/1362193.jpg" class="card-img-top object-fit-cover" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-3 mb-3">
                <div class="card">
                  <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1489732961i/1362193.jpg" class="card-img-top object-fit-cover" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                  <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1489732961i/1362193.jpg" class="card-img-top object-fit-cover" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                  <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1489732961i/1362193.jpg" class="card-img-top object-fit-cover" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                  <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1489732961i/1362193.jpg" class="card-img-top object-fit-cover" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center mb-3">
        {/* footer */}
        &copy; {new Date().getFullYear()}. All Rights Reserved
      </div>
    </>
  );
};

export default Landing;
