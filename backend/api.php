<?php

// 1. Permite acesso de qualquer origem (essencial para o frontend)
header("Access-Control-Allow-Origin: *");
// 2. Define que a resposta será em JSON
header("Content-Type: application/json");

// Dados Falsos (mock) dos cursos
$cursos = [
    [
        "id" => 1,
        "nome" => "Desenvolvimento Web com React",
        "descricao" => "Aprenda a criar interfaces modernas e reativas.",
        "imagem_url" => "https://via.placeholder.com/300x200"
    ],
    // Adicione mais cursos aqui
];

// Converte o array PHP para JSON e o exibe
echo json_encode($cursos);
