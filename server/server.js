import express from "express";
import cors from "cors";

const app = express();
const port = 8080;
app.use(cors());
app.use(express.json());

app.get("/", function (request, response) {
    response.json("Woah! Who invited you? You have hit the root route");
});


const beaches = [
    {
    name: "Elafonissi Beach",
    location: "Crete Island, Greece",
    description: "Pink sand beach",
    },
    {
    name: "North Island",
    location: "Seychelles",
    description: " Beautiful beach"
    },
    {
    name: "Nihiwatu Beach, Sumba Island",
    location: "Bali, Indonesia",
    description: "Island beach",
    },
];

app.get("/beaches", function (request, response) {
    console.log("Someone is trying to see all of our beaches!");
    console.log("Wait a sec, it's ok, let's give them the beaches");
    response.json(beaches);
});

app.listen(port, function () {
    console.log(`Server is running (away, catch it!) on port: ${port}`);
});