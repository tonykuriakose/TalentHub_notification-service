import mongoose from "mongoose";



class Database {
  private dbUrl: string;

  constructor(dbUrl: string) {
    this.dbUrl = dbUrl;
  }
  async connect(): Promise<void> {
    try {
      await mongoose.connect(this.dbUrl, { dbName: "notification-db" });
      console.log("DB Connected");
    } catch (error) {
      console.log(error);
    }
  }



  async disconnect(): Promise<void> {
    try {
      await mongoose.disconnect();
      console.log("DB disconnected");
    } catch (error) {
      console.log(error);
    }
  }
}

export default Database;
