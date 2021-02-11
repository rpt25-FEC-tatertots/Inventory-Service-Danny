const App = require('./server.js');

// eslint-disable-next-line no-unused-expressions
App.listen(process.env.PORT || 5004, () => console.log(`Server is listening on port ${process.env.PORT}`));
