$(document).ready(function(){
    
    
   $(document).on('click', '.btn', function(){
                        
                        $('#modalBody').empty();
    	
    			var idTask  = $(this)                       
                            .parent()              // Navega para o elemento pai (td)
                            .parent()              // Navega para o pai de td (tr)
                            .find(':nth-child(0)') // Encontra o elemento do seletor
                            .html();               // Retorna o html do elemento 

                        var contentTask  = $(this)                       
                            .parent()              // Navega para o elemento pai (td)
                            .parent()              // Navega para o pai de td (tr)
                            .find(':nth-child(2)') // Encontra o elemento do seletor
                            .html();               // Retorna o html do elemento 
                          
                         console.log(this.getAttribute('id'));
                         
                         var pedidoId = this.getAttribute('id');
                         
                         $('#pedidoDetalhes').html('Pedido #'+pedidoId+' Detalhes');
                         
                         $.post('../totvsteste/controller/ListarPedidoEspecificoController.php',{pedidoId:pedidoId},function(data){
                            console.log(data);
                                var jsonObject = JSON.parse(data);
                                $('#modalBody').append(
                                    "<div class=\"panel panel-default\">"+
                                    "<div id=\"valorTotalPedido\"class=\"panel-heading\">"+jsonObject[0].nome+"</div>"+     
                                    "<table id=\"tableStatus"+pedidoId+"\" class=\"table\">"+
                                    "<thead class=\"thead-dark\">"+
                                    "<tr>"+
                                        
                                    "</tr>"+
                                    "</thead>");
                            
                                    $.post('../totvsteste/controller/totalPedidoController.php',{pedidoId:pedidoId},function(data){
                                        console.log(data);
                                        $("#valorTotalPedido").append("   Valor Total do Pedido "+data);
                                    });
                                    
                                    $.post('../totvsteste/controller/ListarPedidoItensController.php',{pedidoId:pedidoId},function (data) {
                                        console.log("itens do pedido "+data);
                                        
                                        
                                        var jsonObject = JSON.parse(data);
                                        
                                        for(i=0;i<jsonObject.length;i++){
                                           
                                           
                                            
                                            
                                        var elementTable = "#tableStatus"+jsonObject[i].fk_pedido+"";
                                         $(""+elementTable+"").append("<tr id="+jsonObject[i].id+">"+
                                                                     "<td id=\"\">"+jsonObject[i].descricao+"</td>"+
                                                                     "<td id=\"\">"+jsonObject[i].preco+"</td>"+
                                                                     "<td id=\"\"><span class=\"badge\">X"+jsonObject[i].quantidade+"</span></td>"+


                                                                     "</tr>");

                                      }                    
                                      
                                     });
                                     
                                    $('#modalBody').append(
                                    "<table id=class=\"table\">"+
                                    "<thead class=\"thead-dark\">"+
                                    "<tr>"+
                                        
                                    "</tr>"+
                                    "</thead>"+
                                    "<tr class=\"row\"id=>"+
                                    "<td class=\"col-sm-8\" id=\"\">Status</td>"+
                                    "<td class=\"col-sm-4\"id=\"\">"+jsonObject[0].status+"</td>"+
                                    "</tr>"+
                                    "<tr class=\"row\" id=>"+
                                    "<td class=\"col-sm-8\" id=\"\">Data de Criação</td>"+
                                    "<td class=\"col-sm-4\" id=\"\">"+jsonObject[0].createdAt+"</td>"+
                                    "</tr>"+
                                    "<tr class=\"row\" id=>"+
                                    "<td class=\"col-sm-8\" id=\"\">CNPJ</td>"+
                                    "<td class=\"col-sm-4\" id=\"\">"+jsonObject[0].cnpj+"</td>"+
                                    "</tr>"+
                                    "<tr class=\"row\" id=>"+
                                    "<td class=\"col-sm-8\" id=\"\">Estado para Envio</td>"+
                                    "<td class=\"col-sm-4\" id=\"\">"+jsonObject[0].estado+"</td>"+
                                    "</tr>"+
                                    "<tr class=\"row\" id=>"+
                                    "<td class=\"col-sm-8\" id=\"\">Telefone para Envio</td>"+
                                    "<td class=\"col-sm-4\" id=\"\">"+jsonObject[0].telefone+"</td>"+
                                    "</tr>"+
                                    "<tr class=\"row\" id=>"+
                                    "<td class=\"col-sm-8\" id=\"\">CEP</td>"+
                                    "<td class=\"col-sm-4\" id=\"\">"+jsonObject[0].cep+"</td>"+
                                    "</tr>"+
                                    "<tr class=\"row\" id=>"+
                                    "<td class=\"col-sm-8\" id=\"\">Endereço</td>"+
                                    "<td class=\"col-sm-4\" id=\"\">"+jsonObject[0].endereco+"</td>"+
                                    "</tr>"+
                                    "<tr class=\"row\" id=>"+
                                    "<td class=\"col-sm-8\" id=\"\">Pais</td>"+
                                    "<td class=\"col-sm-4\" id=\"\">"+jsonObject[0].pais+"</td>"+
                                    "</tr>"
                                     );
                            });
                            
                            $('#modalBody').append("</table></div>"); 
        		
        		 
    		
    
		});
 
});


function retrieveGroupsAndTasks() {
    
    $.post('../totvsteste/controller/ListarPedidosController.php',{},function(data){
        console.log(data);
        var jsonObjectGroup = JSON.parse(data);
        var pedidoId = jsonObjectGroup[0].id;
        
        $.post('../totvsteste/controller/ListarPedidoItensController.php',{pedidoId:pedidoId},function (data) {
            console.log("itens do pedido "+data);
        });
    });
    $.post('../totvsteste/controller/ListarPedidosController.php',{},function (data) {
           
           
           var jsonObjectGroup = JSON.parse(data);
           for(i=0;i<jsonObjectGroup.length;i++){
               
               
                $('#groups').append("<div id=\"painel"+jsonObjectGroup[i].id+"\" class=\"panel panel-default\">"+
                            "<div class=\"panel-heading\">"+jsonObjectGroup[i].nome+" Pedido #"+jsonObjectGroup[i].id+""+
                            "<td><button id=\""+jsonObjectGroup[i].id+"\" class=\"btn btn-link\" data-toggle=\"modal\" data-target=\"#myModal\"><span class=\"glyphicon glyphicon-edit\"></span> Detalhes Do Pedido</button></td>"
                            );
                
                $('#painel'+jsonObjectGroup[i].id).append("<table id=\"table"+jsonObjectGroup[i].id+"\" class=\"table\">"+
                            "<thead class=\"thead-dark\">"+
                            
                            "</thead>");
                    var pedidoId = jsonObjectGroup[i].id;
                    
                    
            $.post('../totvsteste/controller/ListarPedidoItensController.php',{pedidoId:pedidoId},function (data) {
                    //console.log(JSON.parse(data));
                    var jsonObject = JSON.parse(data);
                    for(i=0;i<jsonObject.length;i++){
                        
                        var valorPedido = jsonObject[i].preco;
                        
                        $('#idValorPedido'+jsonObject[i].fk_pedido).val(valorPedido);
                           //var table = $().val();
                           var elementTable = "#table"+jsonObject[i].fk_pedido+"";
                           $(""+elementTable+"").append("<tr id="+jsonObject[i].id+">"+
                                                        "<td id=\"\">"+jsonObject[i].descricao+"</td>"+
                                                        "<td id=\"\">R$"+jsonObject[i].preco+"</td>"+
                                                        "<td id=\"\"><span class=\"badge\">X"+jsonObject[i].quantidade+"</span></td>"+
                                                        "</tr>");
                            }
                });
                
                $('#groups').append("</table></div");
           }
            
        });
}



