const React = require("react");
const Def = require("../default");

const index = (data) => {
  const placesFormatted = data.places.map((place, index) => {
    return (
      <div className="col-sm-6" key={place.name}>
        <h2>
          <a href={`/places/${index}`}>{place.name}</a>
        </h2>
        {/* class name the text appers to side of image, clas name text appear above and below image */}
        <p className="text-center">{place.cuisines}</p>
        <img src={place.pic} alt={place.name} />
        {/* class name the text appers to side of image, clas name text appear above and below image */}
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    );
  });

  return (
    <Def>
      <main>
        <h1>Places to Rant or Rave About</h1>
        <div className="row">{placesFormatted}</div>
      </main>
    </Def>
  );
};

module.exports = index;
