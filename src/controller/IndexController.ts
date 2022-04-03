import express, { Request, Response } from "express";
import { emit } from "process";

import {Test} from "./test"

export const indexController = express.Router();

const test = new Test();

indexController.get("/", async (req: Request, res: Response) => {
    const queryName = req.query["name"];
    test.hello(queryName);
    res.json({hello:queryName});
});



