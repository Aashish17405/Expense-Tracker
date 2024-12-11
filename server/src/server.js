const app = require('./app');
const connectDB = require('./config/db');
require('dotenv').config();
const port = process.env.PORT;

connectDB();

app.listen(port, () => {
    console.log(`server running on port ${port} at http://localhost:${port}`);
})