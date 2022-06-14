const React = require("react");
const Def = require("./default");

const error404 = () => {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, time to play with some dinos since we can't find yopur page</p>
      </main>
    </Def>
  );
};

module.exports = error404;
