<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class PedidoItens{
    
    private $id;
    private $fk_produto;
    private $fk_pedido;
    private $quantidade;
    
    public function __construct() {
        
    }
    
    function getId() {
        return $this->id;
    }

    function getFk_produto() {
        return $this->fk_produto;
    }

    function getFk_pedido() {
        return $this->fk_pedido;
    }

    function getQuantidade() {
        return $this->quantidade;
    }

    function setId($id) {
        $this->id = $id;
    }

    function setFk_produto($fk_produto) {
        $this->fk_produto = $fk_produto;
    }

    function setFk_pedido($fk_pedido) {
        $this->fk_pedido = $fk_pedido;
    }

    function setQuantidade($quantidade) {
        $this->quantidade = $quantidade;
    }


    
}