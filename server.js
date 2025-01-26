const app = require("./src/app");

const PORT = process.env.PORT || 3000;


// start the server here
app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});