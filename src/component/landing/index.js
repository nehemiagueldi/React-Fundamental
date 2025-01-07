import { useState, useEffect } from "react";
import { getAllBooks } from "../../services/landing";

let Landing = () => {
  let IDRupiah = new Intl.NumberFormat("id-ID", {
    // format currency rupiah
    style: "currency",
    currency: "IDR",
  });
  let [responseData, setResponseData] = useState(null); // menyimpan data yang didapat dari response api
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    let getBooks = async () => {
      // menunggu agar mengload semua data dulu dari api
      try {
        let result = await getAllBooks();
        console.log(result);
        setResponseData(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getBooks();
  }, []); // [] isi depedency array menjadi trigger apakah useEffect ini akan dijalankan lagi atau tidak
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="container">
            {/* content */}
            <div id="carouselExample" className="carousel carousel-dark slide" data-bs-ride="carousel">
              <div className="carousel-inner" style={{ height: "500px" }}>
                <div className="carousel-item active">
                  <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-banner-ad-template-design-369952ddd08de78a01481898e6bb35b1_screen.jpg?ts=1732692056" className="d-block mx-auto object-fit-cover" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-review-banner-post-design-template-edccf16ae1f0905fc86db31590a6d236_screen.jpg?ts=1732695622" className="d-block mx-auto object-fit-cover" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://img.freepik.com/free-psd/world-book-day-social-media-post-template_47987-15404.jpg" className="d-block mx-auto object-fit-cover" alt="..." />
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
              <div className="card-header">Recommended Books</div>
              <div className="card-body overflow-auto">
                <div className="d-flex">
                  {responseData &&
                    responseData.map((book) => (
                      <div key={book.id} className="card mx-2 w-25 flex-shrink-0">
                        <img src={book.asset.path} style={{ height: "490px" }} className="card-img-top object-fit-cover" alt="..." />
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <h5 className="card-title">{book.title}</h5>
                            <h5 className="card-title">{book.year}</h5>
                          </div>
                          <div className="row">
                            <div className="col-sm-6 text-start">{IDRupiah.format(book.price)}</div>
                            <div className="col-sm-6 text-end">{book.author.name}</div>
                            <div className="col-sm-6 text-start">
                              <b>Stock:</b> {book.count}
                            </div>
                            <div className="col-sm-6 text-end">{book.publisher.name}</div>
                          </div>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" className="btn btn-primary">
                            Go somewhere
                          </a>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Landing;
