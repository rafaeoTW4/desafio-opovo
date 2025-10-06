<?php
// Define o cabeçalho da resposta como JSON
header("Content-Type: application/json; charset=utf-8");

// Permite que o frontend (em outra porta ou domínio) acesse a API
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Tratamento de requisições OPTIONS (necessário para o CORS)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// --- Dados dos Cursos ---
// A estrutura agora corresponde exatamente ao que o componente CourseCard do React espera.
$cursos = [
    [
        "imageSrc" => "http://192.168.220.4/images/Curso_1.jpg", // Caminho completo da imagem
        "tags" => ["EXTENSÃO", "BEM-VIVER"],
        "title" => "Educação Ambiental para um Presente Sustentável",
        "author" => "Por Fundação Demócrito Rocha"
    ],
    [
        "imageSrc" => "http://192.168.220.4/images/Curso_2.jpg",
        "tags" => ["CURTA DURAÇÃO", "TECNOLOGIA E PROFISSÃO"],
        "title" => "Como Implementar a Política Municipal de Educação Ambiental",
        "author" => "Por Daniel Pagliuca"
    ],
    [
        "imageSrc" => "http://192.168.220.4/images/Curso_3.jpg",
        "tags" => ["CURTA DURAÇÃO", "BEM-VIVER"],
        "title" => "Bullying: conhecer para combater",
        "author" => "Por Grecianny Carvalho"
    ],
    [
        "imageSrc" => "http://192.168.220.4/images/Curso_4.jpg",
        "tags" => ["EXTENSÃO", "BEM-VIVER"],
        "title" => "Gestão Fiscal Interfederativa",
        "author" => "Por Fundação Demócrito Rocha"
    ],
    [
        "imageSrc" => "http://192.168.220.4/images/Curso_1.jpg",
        "tags" => ["NOVO"],
        "title" => "Curso Adicional 5",
        "author" => "Autor"
    ],
    [
        "imageSrc" => "http://192.168.220.4/images/Curso_2.jpg",
        "tags" => ["NOVO"],
        "title" => "Curso Adicional 6",
        "author" => "Autor"
    ]
];

// Converte o array PHP para JSON e o exibe
// JSON_UNESCAPED_UNICODE garante que acentos e caracteres especiais sejam exibidos corretamente
echo json_encode($cursos, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);