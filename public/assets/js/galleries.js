// http://sachinchoolur.github.io/lightGallery/docs/

// GALLERY 1
jQuery('#gallery1').on('click', function (e) {    
    "use strict";   
    e.preventDefault();
    
    // Initialize the plugin
    jQuery(this).lightGallery({
        
        // Settings
        dynamic: true,
        zoom: true,
        fullScreen: true,
        autoplay: false,
        autoplayControls: true,
        thumbnail: true,
        download: true,
        counter: true,
        actualSize: true,
        
        // Images
        dynamicEl: [{
            // Image Url
            'src': 'images/photos/800x600.jpg',
            // Thumbnail url
            'thumb': 'images/photos/100x100.jpg',
            // Image caption
            'subHtml': 'Proident aute minim senserit'
        }, {
            'src': 'images/photos/800x600.jpg',
            'thumb': 'images/photos/100x100.jpg',
            'subHtml': "Ullamco ubi mandaremus"
        }, {
            'src': 'images/photos/800x600.jpg',
            'thumb': 'images/photos/100x100.jpg',
            'subHtml': "Quae expetendis"
        }, {
            'src': 'images/photos/800x600.jpg',
            'thumb': 'images/photos/100x100.jpg',
            'subHtml': 'Eram labore nescius'
        }, {
            'src': 'images/photos/800x600.jpg',
            'thumb': 'images/photos/100x100.jpg',
            'subHtml': "Ne esse mandaremus"
        }, {
            'src': 'images/photos/800x600.jpg',
            'thumb': 'images/photos/100x100.jpg',
            'subHtml': "Elit vidisse ab philosophari"
        }, {
            'src': 'images/photos/800x600.jpg',
            'thumb': 'images/photos/100x100.jpg',
            'subHtml': 'Aliquip ne hic dolore '
        }, {
            'src': 'images/photos/800x600.jpg',
            'thumb': 'images/photos/100x100.jpg',
            'subHtml': "Qui nisi eiusmod ingeniis"
        }, {
            'src': 'images/photos/800x600.jpg',
            'thumb': 'images/photos/100x100.jpg',
            'subHtml': "Eram lorem nisi occaecat"
        }, {
            'src': 'images/photos/800x600.jpg',
            'thumb': 'images/photos/100x100.jpg',
            'subHtml': "Senserit ubi nisi quibusdam"
        }]
        
    });
    
    return false;
});

// GALLERY 2
jQuery('#gallery2').on('click', function (e) {
    "use strict";   
    e.preventDefault();
    
    // Initialize the plugin
    jQuery(this).lightGallery({
        
        // Settings
        dynamic: true,
        zoom: false,
        fullScreen: false,
        autoplayControls: false,
        thumbnail: true,
        loadYoutubeThumbnail: true,
        youtubeThumbSize: 'default',
        loadVimeoThumbnail: true,
        vimeoThumbSize: 'thumbnail_medium',
        download: false,
        counter: true,
        actualSize: false,
        
        // Videos - Videos work only on a server!
        dynamicEl: [
            {
                // Video url
                'src': 'images/photos/800x600.jpg',
                'thumb': 'images/photos/100x100.jpg',
                'subHtml': "Ullamco ubi mandaremus"
            },
            {
                'src': 'images/photos/800x600.jpg',
                'thumb': 'images/photos/100x100.jpg',
                'subHtml': "Ullamco ubi mandaremus"            }
        ]
        
    });
});

// GALLERY 3
jQuery('#gallery3').on('click', function (e) {
    "use strict";    
    e.preventDefault();
    
    // Initialize the plugin
    jQuery(this).lightGallery({
        
        // Settings
        dynamic: true,
        zoom: true,
        fullScreen: true,
        autoplay: true,
        autoplayControls: true,
        pause: 5000,
        thumbnail: true,
        download: true,
        counter: true,
        actualSize: true,
        
        // Images
        dynamicEl: [{
            // Image url
            'src': 'images/photos/800x600.jpg',
            // Thumbnail url
            'thumb': 'images/photos/100x100.jpg',
            // Image caption
            'subHtml': "Ullamco ubi mandaremus"
        }, {
            'src': 'images/photos/800x600.jpg',
            'thumb': 'images/photos/100x100.jpg',
            'subHtml': 'Proident aute minim senserit'
        }, {
            'src': 'images/photos/800x600.jpg',
            'thumb': 'images/photos/100x100.jpg',
            'subHtml': 'Eram labore nescius'
        }, {
            'src': 'images/photos/800x600.jpg',
            'thumb': 'images/photos/100x100.jpg',
            'subHtml': "Elit vidisse ab philosophari"
        }, {
            'src': 'images/photos/800x600.jpg',
            'thumb': 'images/photos/100x100.jpg',
            'subHtml': 'Aliquip ne hic dolore '
        }, {
            'src': 'images/photos/800x600.jpg',
            'thumb': 'images/photos/100x100.jpg',
            'subHtml': "Ne esse mandaremus"
        }, {
            'src': 'images/photos/800x600.jpg',
            'thumb': 'images/photos/100x100.jpg',
            'subHtml': "Qui nisi eiusmod ingeniis"
        }, {
            'src': 'images/photos/800x600.jpg',
            'thumb': 'images/photos/100x100.jpg',
            'subHtml': "Eram lorem nisi occaecat"
        }, {
            'src': 'images/photos/800x600.jpg',
            'thumb': 'images/photos/100x100.jpg',
            'subHtml': "Quae expetendis"
        }, {
            'src': 'images/photos/800x600.jpg',
            'thumb': 'images/photos/100x100.jpg',
            'subHtml': "Senserit ubi nisi quibusdam"
        }]
    });
    
    return false;
});
// GALLERY 4
jQuery('#gallery4').on('click', function (e) {
    "use strict";
    e.preventDefault();
    
    // Initialize the plugin
    jQuery(this).lightGallery({
        
        // Settings
        dynamic: true,
        zoom: false,
        fullScreen: false,
        autoplay: false,
        thumbnail: false,
        download: false,
        counter: true,
        autoplayControls: false,
        actualSize: false,
        
        // Images
        dynamicEl: [{
            // Image url
            'src': 'images/photos/800x600.jpg',
            // Thumbnail url
            'thumb': 'images/photos/100x100.jpg',
            // Caption url
            'subHtml': 'Aliquip ne hic dolore '
        }, {
            'src': 'images/photos/800x600.jpg',
            'thumb': 'images/photos/100x100.jpg',
            'subHtml': "Ne esse mandaremus"
        }, {
            'src': 'images/photos/800x600.jpg',
            'thumb': 'images/photos/100x100.jpg',
            'subHtml': "Qui nisi eiusmod ingeniis"
        }, {
            'src': 'images/photos/800x600.jpg',
            'thumb': 'images/photos/100x100.jpg',
            'subHtml': "Quae expetendis"
        }, {
            'src': 'images/photos/800x600.jpg',
            'thumb': 'images/photos/100x100.jpg',
            'subHtml': "Senserit ubi nisi quibusdam"
        }]
        
    });
    
    return false;
});