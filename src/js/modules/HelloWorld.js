export default class HelloWorld {
    sayHello() {
        document.querySelector('body').innerHTML = document.querySelector('body').innerHTML + 'Hello World!';
    }
}