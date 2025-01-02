import { useEffect, useState } from "react";
import { getDetailBooks } from "../../services/landing";
import { useParams } from "react-router-dom";

let DetailBooks = () => {
  let IDRupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  let [responseData, setResponseData] = useState(null);
  let [loading, setLoading] = useState(true);
  let {id} = useParams();
  useEffect(() => {
    console.log(id)
    let selectedBooks = async () => {
      try {
        let result = await getDetailBooks(id);
        console.log(result);
        setResponseData(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    selectedBooks();
  }, []);
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="container">
          <div className="card">
            <div className="card-header">Detail Books</div>
            <div className="card-body">
              <div className="row">
                <div className="col text-center">
                  <img src={responseData.asset.path} className="object-fit-cover w-50 rounded" alt="..." />
                </div>
                <div className="col">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <h2 className="card-title">{responseData.title}</h2>
                      <h2 className="card-title">{responseData.year}</h2>
                    </div>
                    <div>
                      <div className="py-1 fs-5">
                        <b>Price:</b> {IDRupiah.format(responseData.price)}
                      </div>
                      <div className="py-1 fs-5">
                        <b>Author:</b> {responseData.author.name}
                      </div>
                      <div className="py-1 fs-5">
                        <b>Stock:</b> {responseData.count}
                      </div>
                      <div className="py-1 fs-5">
                        <b>Publisher:</b> {responseData.publisher.name}
                      </div>
                    </div>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/books" className="btn btn-primary">
                      Back to List Books
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailBooks;
