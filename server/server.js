import express from "express";
import devBundle from "./devBundle";
import path from "path";
import template from "../template";
import { MongoClient } from "mongodb";
let myDb;

let port = process.env.PORT || 3000;
const CURRENT_WORKING_DIR = process.cwd();
const URL = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/db_manajemen_sekolah';

const connect = (callback) => {
    if (myDb === undefined) {
        MongoClient.connect(URL, (err, db) => {
            if (err) { throw callback(err); }
            else {
                console.log("SUCCESS ======= >", "connected successfully to mongodb server");
                myDb = db;
                callback(null, myDb);
            }
        });
    } else {
        callback(null, myDb);
    }
}


const app = express();

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));

app.get('/', (req, res) => {
    res.status(200).send(template());
});

app.listen(port, function onStart(err) {
    if (err) {
        console.error(err);

    } else {
        connect((err, db) => {
            if (err) {
                console.error("ERROR CONNECT =======> ", err);
            } else {

                console.info("INFO SUCCESS =====>", "Server started on port %s", port);
                db.close();
            }
        });
    }


})

devBundle.compile(app);