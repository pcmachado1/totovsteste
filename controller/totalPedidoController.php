<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 2019
 * @ author Paulo Machado
 */

include '../config.php';

$conexao = new ConectionFactory();
$query = new Queryes();
$pedido = new Pedido();

$pedido->setId($_POST['pedidoId']);

try {
    
    $result = $conexao->getConectionLocal()->prepare($query->listarPedidoItens($pedido));
    $result->execute();
    $result1 = $result->fetchAll();
    $total = null;
    foreach ($result1 as $row) {
        
        $preco = $row['preco'];
        $quantidade = $row['quantidade'];
        $totalTemp = $preco * $quantidade;
        $total += $totalTemp;
    }
    
    echo $total;
    //var_dump($result1[0]);
    
    //echo json_encode($result->fetchAll());
    
} catch (PDOException $exc) {
    echo $exc->getMessage();
    
}

