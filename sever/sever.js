import express from "express";
import devBundle from "./devBundle";
import path from "path";
import template from "./../template";
import { MongoClient } from "mongodb";

let port = process.env.PORT || 3000;
const CURRENT_WORKING_DIR = process.cwd();
const URL = process.env.MONGODB_URL || 'mongodb://127.0.0.1:47622/merndb';
MongoClient.connect(URL, (err, db) => {
    console.log("connected successfully to mongodb server");
    db.close();
});

const app = express();

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));

app.get('/', (req, res) => {
    res.status(200).send(template());
});

app.listen(port, function onStart(err) {
    if (err) {
        console.error(err);

    }
    console.info("Server started on port %s", port);

})

devBundle.compile(app);