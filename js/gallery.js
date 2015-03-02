$(document).ready(function() {
    $('#blueimp-gallery')
        .on('open', function(event) {
            console.log("opened");
        })
        .on('close', function(event) {
            console.log("opened");
        })
        .on('slide', function (event, index, slide) {
            console.log("slide");

            var links = $('#links').children();
            var descText = $(links[index]).data('description');
            var descNode = $(this).find('.description');

            var paddingBot = '';
            descNode.empty();
            if (descText) {
                descNode.text(descText);
                paddingBot = '60px';
            } else {
                paddingBot = '41px';
            }
            $(slide).parent().css('padding-bottom', paddingBot);
        });

});

