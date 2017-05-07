function HelloWorld() {
    return {
        sayHello: function () {
            document.querySelector('body').innerHTML = document.querySelector('body').innerHTML + '<p>Hello World!</p>';
        }
    }
}

module.exports = HelloWorld;