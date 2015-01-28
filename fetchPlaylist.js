'use strict';

var request = require('request'), //define the request
    cheerio = require('cheerio'); //define cheerio package

module.exports = function(req, res) {
    
    var url = 'https://www.youtube.com/playlist?list=' + req.query['list'];
    
    request(url, function(err, resp, html) {
        var $ = cheerio.load(html);
        
        var data = {};
        
        data.playlistName = $('.pl-header-title').text().trim();
        data.videos = [];
        
        $('.pl-video-title').each(function(i, el) {
            
            var obj = {
                name: $(this).text().trim(),
                url: $(this).find('a').attr('href').substr(9, 11)
            }
            
            data.videos.push(obj);
        });
        
        res.json(data);
    });
};