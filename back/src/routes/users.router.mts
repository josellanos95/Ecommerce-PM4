import { Request, Response, Router } from "express";
import validateUserRegister from "../middlewares/userRegister.middleware.mjs";
import validateUserLogin from "../middlewares/userLogin.middleware.mjs";
import { login, registerUser } from "../controllers/user.controller.mjs";
import checkLogin from "../middlewares/checkLogin.middleware.mjs";
import { OrderRepository } from "../repositories/order.repository.mjs";

const usersRouter = Router();

usersRouter.post("/register", validateUserRegister, registerUser);

usersRouter.post("/login", validateUserLogin, login);

usersRouter.get("/orders", checkLogin, async (req: Request, res: Response) => {
  const { userId } = req.body;
  const orders = await OrderRepository.find({
    relations: ["products"],
    where: { user: { id: userId } },
  });

  res.send(orders);
});

export default usersRouter;
