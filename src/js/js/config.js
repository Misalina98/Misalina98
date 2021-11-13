$("#boton").click(()=>{

    console.log("le acabo de dra click al boto");
});


$(" #cerrar").click(()=>{
    console.log("acaba de cerrar el modal");
    
});


$(".time").click(()=>{
    alert("TEMPO")
    setTimeout(function() {
      $('#exampleModal').modal('hide');
    }, 5000);
  })