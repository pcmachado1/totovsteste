<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Pedido{
    
    private $id;
    private $status;
    private $fkCliente;
    private $createdAt;
    
    public function __construct() {
        
    }
    
    function getId() {
        return $this->id;
    }

    function getStatus() {
        return $this->status;
    }

    function getFkCliente() {
        return $this->fkCliente;
    }

    function getCreatedAt() {
        return $this->createdAt;
    }

    function setId($id) {
        $this->id = $id;
    }

    function setStatus($status) {
        $this->status = $status;
    }

    function setFkCliente($fkCliente) {
        $this->fkCliente = $fkCliente;
    }

    function setCreatedAt($createdAt) {
        $this->createdAt = $createdAt;
    }


}