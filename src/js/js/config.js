$(' .color').click(()=>{
  console.log('entro');
  $(this).removeClass('btn-secondary');
  $(this).addClass('btn-danger');
})


$(' .tex').click(function() {
  $(this).text("Hola mundo")
})

$(' .hover').hover(
  function(){
    $(".hover").css({"background-color":"#cccccc"});
  },

  function(){
    $(".hover").css({"background-color":"#ffffff"});
  }
);
$(this).removeClass('btn-secondary');
$(this).addClass('btn-danger');





$(document).ready(function () {
  $('#fadeOut').click(
    function(){
      $('#caja').fadeOut(3000);
      $('#fadeOut').text('Fin del efecto')
    });

  });

  $('#fadeIn').click(function(){
    $('#caja').fadeIn(3000);

});

$('#fadeTog').click(function(){
  $('#caja').fadeToggle(1000);

});

$('#slideDown').click(function(){
  $('#caja').slideDown(2000);

});

$('#slideUp').click(function(){
  $('#caja').slideUp(2000);

});

$('#slideTog').click(function(){
  $('#caja').slideToggle(2000);

  });






  $(document).ready(function(){
      $("#starAnimation1").click(function(){
          $("#cubo1").animate({left: '250px'});
      });
  });

  $(document).ready(function(){
    $("#starAnimation2").click(function(){
        $("#cubo2").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
    });
});

$(document).ready(function(){
  $("#starAnimation3").click(function(){
      $("#cubo3").animate({
          left: '250px',
          height: '+=150px',
          width: '+=150px'
      });
  })
});

$(document).ready(function(){
  $("#starAnimation4").click(function(){
      $("#cubo4").animate({
          height: 'toggle'
      });
  })
});




$(document).ready(function(){
  $("#animarImagen1").click(function(){
      $("#imagen1").animate({
          height: 'toggle'
      });
  })
});

 
$(document).ready(function(){
  $("#animarImagen2").click(function(){
      $("#imagen2").animate({
          left: '250px',
          height: '+=150px',
          width: '+=150px'
      });
  })
});



