import express, { Application, Request, Response } from "express";

class Server {
  public app: Application;
  private server: any;

  constructor() {
    this.app = express();
    this.initialize();
    this.setUpRoutes();
  }

  async initialize() {
    try {
      console.log("Server iniializing");
    } catch (error) {
      console.log("Error in initializing", error);
    }
  }

  setUpRoutes(){
    this.app.get("/",(req:Request,res:Response)=>{

      res.status(200).json({message:"Response from Notification API"})

    })
  }

  start(PORT: number | string) {
    this.server = this.app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  }
}

export default Server;
