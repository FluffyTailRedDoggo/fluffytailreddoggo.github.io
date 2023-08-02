require(['crawler'], function(crawler){
    const Crawler = require('crawler'); 

    const c = new Crawler({
        maxConnections: 10,
        // This will be called for each crawled page
        callback: (error, res, done) => {
            if (error) {  
                console.log(error);
            } else {
                const $ = res.$;
                // $ is Cheerio by default
                //a lean implementation of core jQuery designed specifically for the server
                console.log($('title').text());
            }
            done();
        }
    });
    
    // Queue URLs with custom callbacks & parameters
    c.queue([{
        uri: 'https://raw.githubusercontent.com/FluffyTailRedDoggo/Art/main/',
        jQuery: false,
    
        // The global callback won't be called
        callback: (error, res, done) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Grabbed', res.body.length, 'bytes');
            }
            done();
        }
    }]);
})

