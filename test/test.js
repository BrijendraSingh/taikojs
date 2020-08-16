const fk = require('faker')
const TestData = require("../builder/testdata")
const expect = require("chai").expect;

const testdata = new TestData()
.address()
.username()
.password()
.firstname()
.email()
.build();

describe('Feature One', () => {
    it('Test One', async () => {
        expect(testdata).to.be.a('object');
    });
});
