const fk = require('faker')
const TestData = require("../builder/testdata")
const expect = require("chai").expect;

var testdata;

describe('Feature One', () => {
    before(()=>{
        console.log('inside before hook');
        testdata = new TestData()
        .address()
        .username()
        .password()
        .firstname()
        .email()
        .build();
        console.log(testdata);
    })
    after(()=>{
        console.log('inside after hook');
    })
    beforeEach(()=>{
        console.log('inside before each hook');
    })
    afterEach(()=>{
        console.log('inside after each hook');
    })

    it('Test One', async () => {
        expect(testdata).to.be.a('object');
    });

    it('Test Two', async () => {
        expect(testdata.username).to.be.a('string');
    });
});
