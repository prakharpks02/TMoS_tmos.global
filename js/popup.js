<<<<<<< HEAD
//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".open1").on("click", function() {
  $("#slide1").prop("checked", true);
    $(".popup-overlay, .popup-content ").addClass("active");
   
  });
  
  //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $(".close").on("click", function() {
    $(".popup-overlay, .popup-content ").removeClass("active");
  });

  //appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".open2").on("click", function() {
  $("#slide2").prop("checked", true);
  $(".popup-overlay, .popup-content ").addClass("active");
  
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close").on("click", function() {
  $(".popup-overlay, .popup-content ").removeClass("active");
});


//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".open3").on("click", function() {
  $("#slide3").prop("checked", true);
  $(".popup-overlay, .popup-content ").addClass("active");
 
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close").on("click", function() {
  $(".popup-overlay, .popup-content ").removeClass("active");
});


  

  $(function() {
  
  // contact form animations
  $('#image1').click(function() {
    $('#imagedisplay').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#imagedisplay");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 1) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });
  
});

$(function() {
  
  // contact form animations
  $('#image2').click(function() {
    $('#imagedisplay2').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#imagedisplay2");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 1) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });
  
=======
//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".open1").on("click", function() {
  $("#slide1").prop("checked", true);
    $(".popup-overlay, .popup-content ").addClass("active");
   
  });
  
  //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $(".close").on("click", function() {
    $(".popup-overlay, .popup-content ").removeClass("active");
  });

  //appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".open2").on("click", function() {
  $("#slide2").prop("checked", true);
  $(".popup-overlay, .popup-content ").addClass("active");
  
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close").on("click", function() {
  $(".popup-overlay, .popup-content ").removeClass("active");
});


//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".open3").on("click", function() {
  $("#slide3").prop("checked", true);
  $(".popup-overlay, .popup-content ").addClass("active");
 
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close").on("click", function() {
  $(".popup-overlay, .popup-content ").removeClass("active");
});


  

  $(function() {
  
  // contact form animations
  $('#image1').click(function() {
    $('#imagedisplay').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#imagedisplay");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 1) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });
  
});

$(function() {
  
  // contact form animations
  $('#image2').click(function() {
    $('#imagedisplay2').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#imagedisplay2");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 1) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });
  
>>>>>>> 8221d81718525ccc6d409cbe59aeed20b55e3759
});