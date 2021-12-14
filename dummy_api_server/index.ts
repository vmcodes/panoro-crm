//= Functions & Modules
// Others
import express from "express";

const LOGIN_USER = {
    username: "user@mail.com",
    password: "123456"
}

const MODULES = [
    {
        icon: "",
        name: "",
        description: ""
    }
];

const app = express();

app.use(express.json());

app.post("/api/login", (req, res) => {
    if (!req.body.username) {
        res.status(400).json("Username is missing");
        return;
    }

    if (!req.body.password) {
        res.status(400).json("Passwors is missing");
        return;
    }

    if (req.body.username != LOGIN_USER.username || req.body.password != LOGIN_USER.password) {
        res.status(400).json("Username or password is wrong");
        return;
    }

    res.json(true);
});

app.post("/api/register", (req, res) => {
    if (!req.body.username) {
        res.status(400).json("Username is missing");
        return;
    }

    if (!req.body.password) {
        res.status(400).json("Passwors is missing");
        return;
    }

    if (req.body.username == LOGIN_USER.username) {
        res.status(400).json("Username is already taken");
        return;
    }

    res.json(true);
});

app.get("/api/modules", (_req, res) => {
    res.json(MODULES);
});

app.listen(process.env.DUMMY_API_SERVER_PORT);
