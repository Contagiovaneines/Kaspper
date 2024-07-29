# Loop de 04 até 73
for ($i = 4; $i -le 73; $i++) {
    # Formata o número com dois dígitos
    $filename = "{0:D2}.js" -f $i
    # Cria o arquivo
    New-Item -Path $filename -ItemType File -Force
}

Write-Output "Arquivos criados com sucesso!"
