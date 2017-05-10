
module.exports = {
    remove: [
        { folder: 'app/dist' },
        { file: 'src/css/tictactoe.css' },
        { file: 'src/js/actions/HelloWorld.js' },
        { file: 'src/js/components/TicTacToe.js' },
        { file: 'src/js/pages/TicTacToe.js' }
    ],
    clean: [
        {
            file: 'LICENSE',
            clear: true
        },
        {
            file: 'README.md',
            clear: true
        },
        {
            file: 'app/app.html',
            pattern: /title/
        },
        {
            file: 'src/css/app.css',
            clear: true
        },
        {
            file: 'src/js/routes.js',
            pattern: /TicTacToePage/
        },
        {
            file: 'src/js/pages/Home.js',
            pattern: /(HelloWorld|Link|Tic-Tac-Toe)/
        }
    ],
    add: [
        { file: 'src/js/actions/.gitkeep' },
        { file: 'src/js/components/.gitkeep' }
    ]
};