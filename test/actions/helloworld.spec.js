import assert from 'assert';
import HelloWorld from '../../src/js/actions/helloworld';

export const helloWorldActionsTests = () => {
    describe('HelloWorld Actions', () => {
        describe('sayHello', () => {
            it('should return the "Hello World!" msg', () => {
                assert.equal('Hello World!', new HelloWorld().sayHello());
            });
        });
    });
};