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
                $('.slimScroll').addClass('mac-os');
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

<<<<<<< HEAD
    $("#imgInp").change(function(){
        readURL(this);
    });

=======
    $('#jobsByEducation').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
>>>>>>> 06307b304aec59e6b9bf4a76a5a4727274d4d8cb
    
    
})

function cb(selectedDate) {
    $('#postedDate').html(selectedDate.format('MMMM D, YYYY'));
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#profileThumb').css('background-image', "url(" + e.target.result + ")");
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}
