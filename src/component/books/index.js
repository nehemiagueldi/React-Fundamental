import { useEffect, useState } from "react";
import { getAllBooks } from "../../services/landing";

let Books = () => {
  let [responseData, setResponseData] = useState(null);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    let getBooks = async () => {
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
  }, []);
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="container">
            <div className="card">
              <div className="card-header" id="books">
                List Books
              </div>
              <div className="card-body overflow-auto">
                <div className="row">
                  {responseData &&
                    responseData.map((book) => (
                      <div key={book.id} className="col-sm-4 p-2">
                        <div className="card">
                          <img src={book.asset.path} style={{ height: "500px" }} className="card-img-top object-fit-cover" alt="..." />
                          <div className="card-body">
                            <h5 className="card-title">{book.title}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href={`/books/${book.id}`} className="btn btn-primary">
                              See Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      )}
    </>
  );
};

export default Books;
