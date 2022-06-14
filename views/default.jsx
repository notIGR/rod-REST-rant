const React = require("react");
const Def = (html) => {
  return (
    <html>
      <head>
        <title>Title Goes Here</title>
      </head>
      <body>
        {html.children}
      </body>
    </html>
  );
};

module.exports = Def;
