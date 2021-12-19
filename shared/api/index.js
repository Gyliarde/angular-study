import express from "express";
import { contacts } from "./dao/contactsDAO.js";
import { phoneOperators } from "./dao/phoneOperatorsDAO.js";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/contacts", (req, res) => {
  res.send(contacts);
});

app.get("/phone-operators", (req, res) => {
  res.send(phoneOperators);
});

app.listen(port, () => {
  console.log(`Example port listening at http://localhost:${port}`);
});
