const React = require("react");
const Def = require("./default");

const home = () => {
  return (
    <Def>
      <main>
        <h1>REST-rant</h1>
        <div className="container">
          <div className="row align-items-start">
            <div className="col">
              {" "}
              <img src="/images/bacon.jpg" alt="bacon sizzling"></img>
            </div>
            <div className="col">
              {" "}
              <img src="/images/sammy.jpg" alt="blackforest ham on toasted bread"></img>
            </div>
            <div className="col">
              {" "}
              <img src="/images/smore.jpg" alt="choolate, marshmello, grahm cracker"></img>
            </div>
          </div>
          <div className="row align-items-end">
            <div className="col">
              {" "}
              <img src="/images/cake.jpg" alt="birthday cake with orange icing"></img>
            </div>
            <div className="col">
              {" "}
              <img src="/images/cucumber.jpg" alt="carmel skined adult male holding cucumber in shape of a cellphone from the 90s"></img>
            </div>
            <div className="col">
              {" "}
              <img src="/images/watermelon.jpg" alt="2 good looking young adutls who took a bite out of a  triangle slice of watermelon"></img>
            </div>
          </div>
        </div>

        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
};

module.exports = home;
