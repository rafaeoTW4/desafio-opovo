<?php
// Define o cabeçalho da resposta como JSON
header("Content-Type: application/json");

// Permite que o frontend (em outra porta ou domínio) acesse a API
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Tratamento de requisições OPTIONS (necessário para o CORS)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Dados Falsos (mock) dos cursos
// Substitua o 'IP_DA_SUA_VM' pela URL da sua imagem se tiver.
// Usar placeholders é uma prática comum para testes.
$cursos = [
    [
        "id" => 1,
        "nome" => "Desenvolvimento Front-end com React",
        "descricao" => "Aprenda a construir interfaces modernas e reativas usando React.",
        "imagem_url" => "https://placehold.co/400x250/06B6D4/FFFFFF.png?text=React+JS"
    ],
    [
        "id" => 2,
        "nome" => "Backend em PHP para Iniciantes",
        "descricao" => "Construa APIs robustas e seguras do zero com PHP e conceitos RESTful.",
        "imagem_url" => "https://placehold.co/400x250/4F46E5/FFFFFF.png?text=PHP+Backend"
    ],
    [
        "id" => 3,
        "nome" => "Design Responsivo na Prática",
        "descricao" => "Domine as técnicas de layout e adapte sua aplicação para qualquer dispositivo.",
        "imagem_url" => "https://placehold.co/400x250/22C55E/FFFFFF.png?text=Design"
    ]
];

// Converte o array PHP para JSON e o exibe
echo json_encode($cursos);
