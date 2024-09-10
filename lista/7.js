<!DOCTYPE html>
<html>
<head>
    <title>Inserir Texto</title>
</head>
<body>
    <h1 id="titulo"></h1>
    <script>
        var texto = prompt("Digite um texto:");
        document.getElementById("titulo").innerText = texto;
    </script>
</body>
</html>
