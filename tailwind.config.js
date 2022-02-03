module.exports = {
    content: ['./src/**/*.{tsx}'],
    purge: ['./src/**/*.{tsx}', './public/index.html'],
    theme: {
        colors: {
            white: '#ffffff',
            black: '#000000',
            grey: '#8181a5',
            slate: '#e5e5e5;',
            blue: '#0475e6',
            lightblue: '#0475ee1a',
            purple: '#6c63ff1a',
            lightpurple: '#9698d61a',
            lightred: '#ff808b1a',
            lightgreen: '#6dd2301a',
            lightyellow: '#f4be5e1a',
        },
        extend: {},
    },
    plugins: [],
};
