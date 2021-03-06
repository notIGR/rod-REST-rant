// details page for one place
const React = require("react");
const Def = require("../default");

const showPage = (data) => {
  const comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  const rating = (
    <h3 className="inactive">
      Not yet Rated
    </h3>
  )
  if (data.place.comments.length) {
    const sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    const averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += 'â­ï¸'
    }
    rating = (
      <h3>
        {stars} stars
      </h3>
    )
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
                  <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
          <input type="submit" className="btn btn-danger" value="Delete Comment" />
        </form>
          <h2 className="rant">{c.rant ? 'Rant! >:(' : 'Rave! :)'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
  return (
    <Def>
      <main>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">{data.place.name}</h1>
          <img src={data.place.pic} alt={data.place.name} />
          <h3>
          Located in {data.place.city}, {data.place.state}
        </h3>
        </div>

        <div className="container">
          <div className="card-deck mb-3 text-center">
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Rating</h4>
                {rating}
              </div>
              <div className="card-body">
                <p>Not rated</p>
              </div>
            </div>
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Description</h4>
                <h3>
          {data.place.showEstablished()}
        </h3>
        <h4>
          Serving {data.place.cuisines}
        </h4>
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
                {comments}
              </div>
            </div>
             {/* added button but not linked correctly */}
            <a href={`/places/${data.place.id}/comment`}  className="btn btn-warning">
              Leave a comment
            </a>
            <br></br>
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
