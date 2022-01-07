const express = require("express");
const app = express();
app.use(express.json());
const { addrecord, getrecord } = require('./user');

const cors = require("cors");
const res = require("express/lib/response");
app.use(cors());

app.get("/get-records", async (req, res) => {
    const list = await getrecord();
    res.json(list);
});

app.post("/add-records", async (req, res) => {
    const user = req.body;
    await addrecord(user);
    res.json("new record");
});

app.listen(4000, () => {
    console.log("done");
});