// details page for one place
const React = require("react");
const Def = require("../default");

const showPage = (data) => {
  return (
    <Def>
      <main>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">{data.place.name}</h1>
          <img src={data.place.pic} alt={data.place.name} />
        </div>

        <div className="container">
          <div className="card-deck mb-3 text-center">
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Rating</h4>
              </div>
              <div className="card-body">
                <p>Not rated</p>
              </div>
            </div>
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Description</h4>
              </div>
              <div className="card-body">
                <p>
                  Located in {data.place.city} , {data.place.state} and serving{" "}
                  {data.place.cuisines}!
                </p>
              </div>
            </div>
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Comments</h4>
              </div>
              <div className="card-body">
                <p>No comments yet!!!</p>
              </div>
            </div>
            <a href={`/places/${data.place.id}/edit`}  className="btn btn-warning">
              Edit
            </a>
            <form action={`/places/${data.place.id}?_method=DELETE`} method="POST">
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
          </div>
        </div>
      </main>
    </Def>
  );
};

module.exports = showPage;
