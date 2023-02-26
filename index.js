const express = require('express');
const mongoose = require("mongoose");
//const Book = require("./models/book")
const cors = require('cors');

const Router = require("./router")

const app = express();
const port = process.env.PORT || 3000;
mongoose
.set('strictQuery', true)
.connect("mongodb://admin:seongmin98@127.0.0.1:27017/store?authSource=admin",{
    useNewUrlParser: true,
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log(err);
});

app.use(express.json());
app.use(cors());
app.use(Router);

// next 인자를 통해 넘어온 에러를 처리하기 위한
// 에러 핸들러 추가
app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message })
})

app.listen(port, () => {
    console.log("Server is listening on port" + port);
});
