const React = require("react");

const Def = (html) => {
  return (
    <html>
      <head>
        <title>Title Goes Here</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/style.css" />
      </head>
      <body>
        {html.children}
      </body>
    </html>
  );
};

module.exports = Def;
