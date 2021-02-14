const App = require('./server.js');
let PORT = process.env.PORT || 5004;
// eslint-disable-next-line no-unused-expressions
App.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
