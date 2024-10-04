import type { Request, Response } from "express";
import { User } from "../models";
import { hashPassword, verifyPassword } from "../middlewares/scrypt";

const userController = {
  // API Admin route
  async getAll(req: Request, res: Response) {
    const users = await User.find();
    res.status(200).json({ status: "success", data: users });
  },

  async getUser(req: Request, res: Response) {
    if (!req.body.email || !req.body.password) {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid input" });
    }

    const { email, password } = req.body;
    const user = await User.findOne({
      email,
    });

    const verifiedPassword =
      user && (await verifyPassword(user.password, password));

    if (!verifiedPassword || !user) {
      return res
        .status(401)
        .json({ status: "error", message: "Invalid email or password" });
    }

    return res.status(200).json({ status: "success", data: { user } });
  },

  async createUser(req: Request, res: Response) {
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password) {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid input" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(409)
        .json({ status: "error", message: "User already exists" });
    }
    const hashedPassword = await hashPassword(password);

    const user = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    const newUser = await user.save();
    if (newUser) {
      return res
        .status(201)
        .json({ status: "success", data: { user: newUser } });
    }
    return res
      .status(502)
      .json({ status: "error", message: "User not created" });
  },

  async updateUser(req: Request, res: Response) {
    // const { type, text } = req.body;
    // if (!type || !text) {
    //   return res
    //     .status(400)
    //     .json({ status: "error", message: "Invalid input" });
    // }
    // const id = req.params.id;
    // try {
    //   const User = User.updateOne({ id }, req.body);
    //   return res.status(200).json({ status: "success", data: { User } });
    // } catch (error) {
    //   return res
    //     .status(500)
    //     .json({ status: "error", message: "User not updated" });
    // }
  },

  async deleteUser(req: Request, res: Response) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid input" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }
    const verifiedPassword = await verifyPassword(user.password, password);
    if (!verifiedPassword) {
      return res
        .status(401)
        .json({ status: "error", message: "Invalid password" });
    }

    const result = await User.deleteOne({ email });
    if (result.deletedCount) {
      return res
        .status(204)
        .json({ status: "success", message: "User deleted" });
    }
    return res
      .status(404)
      .json({ status: "error", message: "User not deleted" });
  },

  methodNotAllowed(_: Request, res: Response) {
    return res.status(405).json({
      status: "error",
      message: "Method not allowed",
      path: "api/user",
      allow: ["GET", "POST", "DELETE"],
    });
  },
};

export default userController;
