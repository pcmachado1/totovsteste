<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Cliente {
    
    private $id;
    private $nome;
    
    public function __construct() {
        
    }
    
    public function getId() {
        return $this->id;
    }
    public function getNome(){
        return $this->nome;
    }
    
    public function setId($id){
        $this->id = $id;
    }

    public function setNome($nome){
        $this->nome = $nome;
    }
    
}