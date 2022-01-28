//= Functions & Modules
// Others
import express from 'express';

const LOGIN_USER = {
    username: 'user@mail.com',
    password: '123456',
};

const MODULES = [
    {
        id: 'm1',
        icon: '/imgs/module1.svg',
        color: 'lightpurple',
        name: 'Modul de Tur virtual',
        description: 'Adauga si manageriaza tururile virtuale, adauga tur virtual anunturilor tale si urmareste statisticile.',
    },
    {
        id: 'm2',
        icon: '/imgs/module2.svg',
        color: 'lightred',
        name: 'Modul pentru Documente',
        description:
            'Foloseste documentele puse la dispozitie de PanoroCRM sau incarca documentele tale, noi te ajutam sa le completezi simplu si rapid.',
    },
    {
        id: 'm3',
        icon: '/imgs/module3.svg',
        color: 'lightgreen',
        name: 'Modul pentru statistici',
        description: 'Urmareste toate informatiile esentiale despre anunturi, contacte si clientii tai.',
    },
    {
        id: 'm4',
        icon: '/imgs/module4.svg',
        color: 'purple',
        name: 'Modul Facturare',
        description: 'Emite facturi din PanoroCRM direct catre un contact sau client din lista ta.',
    },
    {
        id: 'm5',
        icon: '/imgs/module5.svg',
        color: 'lightblue',
        name: 'Modul pentru anunturi',
        description: 'Modul care iti permite sa faci management inteligent al anunturilor si contactelor tale',
    },
    {
        id: 'm6',
        icon: '/imgs/module6.svg',
        color: 'lightyellow',
        name: 'Modul pentru contacte',
        description: 'Managementul contactelor printr-un sistem inteligent de tag-uri, asocierea unui contact cu un anunt si multe altele',
    },
];

const app = express();

app.use(express.json());

app.post('/api/users/login', (req, res) => {
    if (!req.body.username) {
        return res.status(400).json('Username is missing');
    }

    if (!req.body.password) {
        return res.status(400).json('Passwors is missing');
    }

    if (req.body.username != LOGIN_USER.username || req.body.password != LOGIN_USER.password) {
        return res.status(400).json('Username or password is wrong');
    }

    return res.json(true);
});

app.post('/api/users/register', (req, res) => {
    if (!req.body.username) {
        return res.status(400).json({ field: 'username', error: 'Username is missing' });
    }

    if (!req.body.password) {
        return res.status(400).json({ field: 'password', error: 'Password is missing' });
    }

    if (!req.body.email) {
        return res.status(400).json({ field: 'email', error: 'Email is missing' });
    }

    if (!req.body.modules) {
        return res.status(400).json({ field: 'modules', error: 'modules is missing' });
    }

    if (!Array.isArray(req.body.modules)) {
        return res.status(400).json({ field: 'modules', error: 'Modules is wrong' });
    }

    if (req.body.accountType === null) {
        return res.status(400).json({ field: 'accountType', error: 'accountType is missing' });
    }

    if (req.body.accountType === 1) {
        if (req.body.businessActivity === null) {
            return res.status(400).json({ field: 'accountType', error: 'businessActivity is missing' });
        }

        if (req.body.businessName === null) {
            return res.status(400).json({ field: 'businessName', error: 'businessName is missing' });
        }

        if (req.body.businessPhoneNumber === null) {
            return res.status(400).json({ field: 'businessPhoneNumber', error: 'businessPhoneNumber is missing' });
        }
    }

    if (req.body.email === LOGIN_USER.username) {
        return res.status(400).json({ field: 'username', error: 'Username is already taken' });
    }

    return res.json(true);
});

app.get('/api/modules', (_req, res) => {
    return res.json(MODULES);
});

app.post('/api/users/recover_password', (req, res) => {
    if (!req.body.email) {
        return res.status(400).json('Email is missing');
    }

    return res.json(true);
});

app.listen(process.env.DUMMY_API_SERVER_PORT || 3001);
