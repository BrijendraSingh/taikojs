const faker = require('faker');
class TestData{
    username(){
        this.username = faker.name.findName();
        return this;
    }

    firstname(){
        this.firstname = faker.name.firstName();
        return this;
    }

    lastname(){
        this.lastname = faker.name.lastName();
        return this;
    }

    email(){
        this.email = faker.internet.email();
        return this;
    }

    address(){
        this.address = faker.address.city();
        return this;
    }

    password(){
        this.password = faker.internet.password();
        return this;
    }

    build(){
        return this;
    }
};

module.exports = TestData

