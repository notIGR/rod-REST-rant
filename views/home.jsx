const React = require("react");
const Def = require("./default");

const home = () => {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <p><a href="/places">
          <button className="btn-primary">Places Page</button></a></p>
      </main>
    </Def>
  );
};

module.exports = home;
