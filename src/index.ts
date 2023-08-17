import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT = process.env.PORT ?? 3000;

app.get("/test", (req: Request, res: Response) => {
  console.log("HEADERS: ", req.headers);
  res.json(req.headers);
});

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
