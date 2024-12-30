import axios from "axios";
import { useState, useEffect } from 'react';

let Landing = () => {
  let IDRupiah = new Intl.NumberFormat('id-ID', { // format currency rupiah
    style: 'currency',
    currency: 'IDR'
  })
  let [responseData, setResponseData] = useState(''); // menyimpan data yang didapat dari response api
  useEffect(() => { // memastikan pemanggilan api hanya sekali ketika render ulang
    axios({
      method: "GET",
      url: "http://localhost:8080/api/book",
    }).then(function(response){
      setResponseData(response.data)
      console.log(response.data)
    }).catch(function(error){
      console.log(error)
    });
  }, []); // [] isi depedency array menjadi trigger apakah useEffect ini akan dijalankan lagi atau tidak
  return (
    <>
      <div className="pb-2">
        {/* header */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a href="/"> {/* Bisa diganti dengan logo */}
              <img src="https://png.pngtree.com/png-vector/20240515/ourmid/pngtree-open-book-logo-png-image_12467719.png" alt="Bootstrap" width="30" height="24"/>
            </a> 
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#books">Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About Us</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div className="container">
        {/* content */}
        <div id="carouselExample" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-inner" style={{ height: "500px" }}>
            <div className="carousel-item active">
              <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-banner-ad-template-design-369952ddd08de78a01481898e6bb35b1_screen.jpg?ts=1732692056" className="d-block mx-auto object-fit-cover" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-review-banner-post-design-template-edccf16ae1f0905fc86db31590a6d236_screen.jpg?ts=1732695622" className="d-block mx-auto object-fit-cover" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="https://img.freepik.com/free-psd/world-book-day-social-media-post-template_47987-15404.jpg" className="d-block mx-auto object-fit-cover" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <hr />
        <div className="card">
          <div className="card-header">
            Recommended Books
          </div>
          <div className="card-body overflow-auto">
            <div className="d-flex">
              {responseData.data && responseData.data.map(book => ( // pengecekan hampir sama dengan if, dicek terlebih dahulu responseData.data ada atau tidak, kalau ada maka bagian setelah && (responseData.data.map(...)) akan dieksekusi, kalau tidak, berenti dan tidak merender apapun. alternatifnya bisa menggunakan Ternary Operator (Syntax: condition ? <expression if true> : <expression if false>)
                <div key={book.id} className="card mx-2 w-25 flex-shrink-0">
                  <img src={book.asset.path} style={{ height:"490px" }} className="card-img-top object-fit-cover" alt="..."/>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <h5 className="card-title">{book.title}</h5>
                      <h5 className="card-title">{book.year}</h5>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 text-start">
                        {IDRupiah.format(book.price)}
                      </div>
                      <div className="col-sm-6 text-end">
                        {book.author.name}
                      </div>
                      <div className="col-sm-6 text-start">
                        <b>Stock:</b> {book.count}
                      </div>
                      <div className="col-sm-6 text-end">
                        {book.publisher.name}
                      </div>
                    </div>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr />
        <div className="card">
          <div className="card-header" id="books">
            List Books
          </div>
          <div className="card-body overflow-auto" style={{ height:"1200px" }} >
            <div className="row">
              {responseData.data && responseData.data.map(book => (
                <div key={book.id} className="col-sm-4 p-2">
                  <div className="card">
                    <img src={book.asset.path} style={{ height:"500px" }} className="card-img-top object-fit-cover" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{book.title}</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              ))}
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
