const expect = require("chai").expect;
const { openBrowser, closeBrowser} = require("taiko")

describe('Wordpress Settings', () => {    
    beforeEach(async () =>{
        await openBrowser({headless:false});

    })

    afterEach(async ()=>{
        await closeBrowser();
    })
    
    it('Admin User is able to see settings', async () => {
        
    });
});
