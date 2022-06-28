const React = require("react");
const Def = require("./default");

const error404 = () => {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, time to play with some dinos since we can't find yopur page</p>
        <div>
          <img src="/images/nando.jpg" alt="cat with bandana"></img>
        </div>
      </main>
    </Def>
  );
};

module.exports = error404;
