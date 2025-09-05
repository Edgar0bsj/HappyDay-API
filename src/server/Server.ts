import * as express from "express";
import * as cors from "cors";
import { environment } from "../common/environment";
import userRouter from "../router/user.router";
import authRouter from "../router/auth.router";

export default class Server {
  application: ReturnType<typeof express>;

  initializeApp(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.application = express();
        this.application.use(cors());
        this.application.use(express.json());

        this.application.use("/auth", authRouter);
        this.application.use("/user", userRouter);

        this.application.listen(environment.server.port, () => {
          console.log(`Servidor is running: ${environment.server.port}`);
          resolve;
        });
      } catch (error) {
        throw new Error(`[Erro:initializeApp] ${error.message}`);
        reject;
      }
    });
  }
  bootstrap(): void {
    this.initializeApp();
  }
}
