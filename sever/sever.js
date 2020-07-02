import express from "express";
import devBundle from "./devBundle";
import path from "path";

const CURRENT_WORKING_DIR = process.cwd();

const app = express();
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))
devBundle.compile(app);