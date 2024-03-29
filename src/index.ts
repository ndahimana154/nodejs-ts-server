import express, { Express, Request, Response } from "express";

const port: number = 3000;

const app: Express = express();


app.get("/",(req:Request, res:Response)=> {
    res.json({"msg": "You are welcome "})
})
app.get("/hi",(req:Request, res:Response)=> {
    res.json({"msg": "Hi how"})
})


app.listen(port, () => {
  console.log(` Server running: http://localhost:${port}`);
});
