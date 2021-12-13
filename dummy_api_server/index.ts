//= Functions & Modules
// Others
import express from "express";

const app = express();

app.get("/api/example-get", (_req, res) => {
    res.json({ a: 1 });
});

app.post("/api/example-post", (_req, res) => {
    res.json({ b: 1 });
});

app.listen(process.env.DUMMY_API_SERVER_PORT);
