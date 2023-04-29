import { Request, Response } from "express";
import { User } from "../models";

const index = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    return res.json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);
    return res.json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const destroy = async (req: Request, res: Response) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ message: "User deleted" });
  } catch (err) {
    return res.status(500).json(err);
  }
};

export default {
  index,
  show,
  create,
  update,
  destroy,
};
