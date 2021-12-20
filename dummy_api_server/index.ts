//= Functions & Modules
// Others
import express from "express";

const LOGIN_USER = {
    username: "user@mail.com",
    password: "123456"
}

const MODULES = [
    {
        id: "m1",
        icon: "/imgs/module1.svg",
        color: "#9698D6",
        name: "Modul de Tur virtual",
        description: "Adauga si manageriaza tururile virtuale, adauga tur virtual anunturilor tale si urmareste statisticile."
    },
    {
        id: "m2",
        icon: "/imgs/module2.svg",
        color: "#EE8E9E",
        name: "Modul pentru Documente",
        description: "Foloseste documentele puse la dispozitie de PanoroCRM sau incarca documentele tale, noi te ajutam sa le completezi simplu si rapid."
    },
    {
        id: "m3",
        icon: "/imgs/module3.svg",
        color: "#57B894",
        name: "Modul pentru statistici",
        description: "Urmareste toate informatiile esentiale despre anunturi, contacte si clientii tai."
    },
    {
        id: "m4",
        icon: "/imgs/module4.svg",
        color: "#6C63FF",
        name: "Modul Facturare",
        description: "Emite facturi din PanoroCRM direct catre un contact sau client din lista ta."
    },
    {
        id: "m5",
        icon: "/imgs/module5.svg",
        color: "#0475E6",
        name: "Modul pentru anunturi",
        description: "Modul care iti permite sa faci management inteligent al anunturilor si contactelor tale"
    },
    {
        id: "m6",
        icon: "/imgs/module6.svg",
        color: "#F4BE5E",
        name: "Modul pentru contacte",
        description: "Managementul contactelor printr-un sistem inteligent de tag-uri, asocierea unui contact cu un anunt si multe altele"
    },
];

const app = express();

app.use(express.json());

app.post("/api/users/login", (req, res) => {
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

app.post("/api/users/register", (req, res) => {
    if (!req.body.username) {
        res.status(400).json({ field: "username", error: "Username is missing" });
        return;
    }

    if (!req.body.password) {
        res.status(400).json({ field: "password", error: "Password is missing" });
        return;
    }

    if (!req.body.email) {
        res.status(400).json({ field: "email", error: "Email is missing" });
        return;
    }

    if (!req.body.modules) {
        res.status(400).json({ field: "modules", error: "modules is missing" });
        return;
    }

    if (!Array.isArray(req.body.modules)) {
        res.status(400).json({ field: "modules", error: "Modules is wrong" });
        return;
    }

    if (req.body.accountType == null) {
        res.status(400).json({ field: "accountType", error: "accountType is missing" });
        return;
    }

    if (req.body.accountType == 1) {
        if (req.body.businessActivity == null) {
            res.status(400).json({ field: "accountType", error: "businessActivity is missing" });
            return;
        }

        if (req.body.businessName == null) {
            res.status(400).json({ field: "businessName", error: "businessName is missing" });
            return;
        }

        if (req.body.businessPhoneNumber == null) {
            res.status(400).json({ field: "businessPhoneNumber", error: "businessPhoneNumber is missing" });
            return;
        }
    }

    if (req.body.username == LOGIN_USER.username) {
        res.status(400).json({ field: "username", error: "Username is already taken" });
        return;
    }

    res.json(true);
});

app.get("/api/modules", (_req, res) => {
    res.json(MODULES);
});

app.post("/api/users/recover_password", (req, res) => {
    if (!req.body.email) {
        res.status(400).json("Email is missing");
        return;
    }

    res.json(true);
});

app.listen(process.env.DUMMY_API_SERVER_PORT || 3001);
