import express, { Request, Response } from "express";

export const controller = express.Router();

controller.get("/", async (req: Request, res: Response) => {
    console.log(req.query["name"]);
    res.json({success:'1'});
});



