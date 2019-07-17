<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Queryes
 * Classe para definição de queryes. 
 * @author Paulo Machado
 */

class Queryes {
    private $query;
    
    function __construct() {
        
    }
    

    public function listarPedidos() {
        
        
        $this->query = "select pedidos.*,clientes.nome from pedidos join clientes on pedidos.fk_cliente = clientes.id where clientes.id = 1;";
        
        return $this->query;
        
    }
    public function listarPedidoItens(Pedido $pedido){
        
        $this->query = "select * from pedidos_itens join produtos on produtos.id = pedidos_itens.fk_produto where fk_pedido = ".$pedido->getId().";";
    
        return $this->query;
    }
    public function listarPedidoEspecifico(Pedido $pedido) {
        
        $this->query = "select pedidos.*,clientes.nome,clientes.cnpj from pedidos join clientes on pedidos.fk_cliente = clientes.id where pedidos.id =".$pedido->getId().";";
        
        return $this->query;
    } 
    

}
