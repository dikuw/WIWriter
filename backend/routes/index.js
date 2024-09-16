import documentRouter from './documentRoutes.js';
import userRouter from './userRoutes.js';

export default (app) => {
  app.use("/api/documents", documentRouter);
  app.use("/api/users", userRouter);
};