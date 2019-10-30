var resp = [];

$(".checkbox-wrap").click(function () {
  var nameGroup = $(this).children('input[type=radio]').attr("name");
  $('input[name=' + nameGroup + ']').each(function () {
      $(this).parent().removeClass("selecionada");
  });
  $(this).addClass("selecionada");
  
  $(".acoes .bt").css({"display":"block"})

});


  $(".bt-confirmar").click(function () {
  
//Pegar o id do Radio Selecioando
$(".selecionada").each(function(i,elemento) {
  var resp = $(elemento).find("input[type=radio]:checked").attr("id");

  if(resp == teste){

  }
      
      
      })
  })

 
    $.get( "http://localhost/atividade-js/data/exercicio.js", function(data) {
         console.log(data);
    });


  
  









 



