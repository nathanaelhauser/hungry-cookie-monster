import { Request, Response } from "express";
import { Cookie } from "../models";

const index = async (req: Request, res: Response) => {
  try {
    const cookies = await Cookie.find();
    return res.json(cookies);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const cookie = await Cookie.findById(req.params.id);
    return res.json(cookie);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const cookie = await Cookie.create(req.body);
    return res.json(cookie);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const cookie = await Cookie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(cookie);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const destroy = async (req: Request, res: Response) => {
  try {
    await Cookie.findByIdAndDelete(req.params.id);
    return res.json({ message: "Cookie deleted" });
  } catch (err) {
    return res.status(500).json(err);
  }
};

export default { index, show, create, update, destroy };
