import express, { Request, Response } from "express";

import {Test} from "./test"

export const controller = express.Router();

const test = new Test();

controller.get("/", async (req: Request, res: Response) => {
    const queryName = req.query["name"];
    test.hello(queryName);
    res.json({success:'1'});
});



