const expect = require("chai").expect;
const { openBrowser, closeBrowser, write, into, $, goto} = require("taiko")

describe('Wordpress Settings', () => {    
    beforeEach(async () =>{
        await openBrowser({headless:false});
        await goto('http://localhost:8000/wp-login.php');

    })

    afterEach(async ()=>{
        await closeBrowser();
    })
    
    it('Admin User is able to see settings', async () => {
        var credential ={
            username:"brijendra",
            password:"password"
        };
        
        await write(credential.username, into($('user_login')));
    });
});
