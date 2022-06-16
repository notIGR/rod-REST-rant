const React = require("react");
const Def = require("./default");

const home = () => {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img src="/images/bacon.jpg" alt="bacon sizzling" ></img>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
};

module.exports = home;
