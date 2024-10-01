import express from "express";
import fs from "fs";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const f = JSON.parse(fs.readFileSync("./ex.json", {
        encoding: "utf-8"
    }));
    const data = f.persons;
    return res.status(200).send(data);
})

app.listen(port, () => {
    console.log(`App listening on uri: http://127.0.0.1:${port}`)
})