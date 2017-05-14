
module.exports = {
    remove: [
        { folder: 'app/dist' },
        { file: 'src/css/components/tictactoe.css' },
        { file: 'src/js/actions/helloworld.js' },
        { file: 'src/js/actions/tictactoe.js' },
        { file: 'src/js/components/TicTacToe.js' },
        { file: 'src/js/containers/TicTacToeGame.js' },
        { file: 'src/js/pages/TicTacToe.js' },
        { file: 'src/js/reducers/tictactoe.js'}
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
        },
        {
            file: 'src/js/store/configureStore.dev.js',
            pattern: /TicTacToeActions/
        },
        {
            file: 'src/js/reducers/index.js',
            pattern: /history/
        }
    ],
    add: [
        { file: 'src/js/actions/.gitkeep' },
        { file: 'src/js/components/.gitkeep' },
        { file: 'src/css/components/.gitkeep' }
    ]
};