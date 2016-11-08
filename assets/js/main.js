requirejs.config({
    enforceDefine: true,
    paths: {
        jquery: [
            'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min',
            // If the CDN fails to load then default to local copy
            './helpers/jquery.min'
        ],

        bootstrap: [
            'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.5/js/bootstrap.min',
            './helpers/bootstrap.min'
        ],

        tether: './helpers/tether.min'
    },

    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }
});

require(['tether'], function (Tether) {
    window.Tether = Tether;
});

define(['jquery'], ['bootstrap'], function ($) {

});