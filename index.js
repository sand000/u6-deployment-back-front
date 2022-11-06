const express = require("express");

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("home");
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})