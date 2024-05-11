var mongoose = require("mongoose");
import { NextRequest, NextResponse } from "next/server";

import Bank from "../../../../server/models/data";

// Connect to the database when the file is loaded
const mongoDB =
  "mongodb+srv://amaojohn767:0lZJuJ5eX9dqGX3Q@spectrumdb.amgibga.mongodb.net/?retryWrites=true&w=majority&appName=Spectrumdb";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    // Fetch banks from the database
    const banks = await Bank.find({});

    // Send the fetched banks as the response
    return NextResponse.json(banks);
  } catch (error) {
    console.error("Error fetching banks:", error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
