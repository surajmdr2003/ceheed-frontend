jQuery(document).ready(function(){
    $('#search-job').click(function() {
        $('#job-search-section').slideToggle();
        $(this).parent('li').toggleClass('active');
    })

    $("#close-job-search-section").click(function() {
        $('#job-search-section').slideToggle();
        $("#search-job").parent('li').toggleClass('active');
    })

    $("#jobList").css('height', $("#job-detail").height());

    if($(".slimScroll").length) {
        window.onload = function(){
            if(!navigator.userAgent.match('Macintosh')){
                var element = document.querySelectorAll('.slimScroll');
        
                // Apply slim scroll plugin
                var one = new slimScroll(element[0], {
                    'wrapperClass': 'scroll-wrapper unselectable mac',
                    'scrollBarContainerClass': 'scrollBarContainer',
                    'scrollBarContainerSpecialClass': 'animate',
                    'scrollBarClass': 'scroll',
                    'keepFocus': false
                });
        
                // resize example
                // To make the resizing work, set the height of the container in PERCENTAGE
                window.onresize = function(){
                    one.resetValues();
                }
            }
            else{
                document.write("For Mac users, this custom slimscroll styles will not be applied");
            }
        }
    } 

    $('#postedDate').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
    },  cb);

    $('.dropdown-item').click(function(){
        $(this).parent().siblings('.dropdown-toggle').html($(this).text());
    });

    $('.fav-job').click(function() {
        $(this).toggleClass('active');
    })

    
    
})

function cb(selectedDate) {
    $('#postedDate').html(selectedDate.format('MMMM D, YYYY'));
}
