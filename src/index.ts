import express, { Request, Response, NextFunction } from "express";
import userRouter from "./routes/user-routes";
import roleRouter from "./routes/role-routes";
import societyRouter from "./routes/society-routes";

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));
app.use((req: Request, res: Response, next: NextFunction) => {
  const allowedOrigins = [
    "http://localhost:3002",
    "http://localhost:3001",
    "http://localhost:3000",
  ];
  const origin = req.headers.origin ?? "";
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Authorization, Content-Type, X-Requested-With, Access-Control-Allow-Origin, Access-Control-Allow-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use("/user", userRouter);
app.use("/role", roleRouter);
app.use("/society", societyRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});