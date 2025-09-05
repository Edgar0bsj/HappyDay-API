import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import type { Request, Response } from "express";

export default class AuthController {
  static register(req: Request, res: Response) {
    res.status(201);
  }
  static login(req: Request, res: Response) {
    res.status(201);
  }
}
