# Guia de Uso

Bem-vindo à pasta de scraping para atualização automática de dados dos animes. Aqui estão os passos necessários para usar os scripts e manter seu banco de dados de animes atualizado.

## Passo a passo

1. **Adicionar Novos Links**
   - Abra o arquivo `database.js` e adicione os novos links dos animes que deseja incluir ou atualizar no seu banco de dados.

2. **Executar o Servidor Local**
   - Inicie o servidor local usando o `index.html` neste diretório através do Live Server do seu ambiente de desenvolvimento. O programa de scraping será acionado automaticamente.

3. **Processo de Scraping Automático**
   - Se o scraping for bem-sucedido, um novo arquivo `dados.json` será baixado. Esse arquivo substituirá o `dados.json` existente nesta pasta e na pasta 'animes', servindo como o novo banco de dados do site.

4. **Atualização dos Títulos**
   - Um arquivo `title.py` também será baixado, contendo os títulos de todos os novos animes. Substitua o arquivo `title.py` na pasta `automatization` com este novo arquivo.

5. **Criação das Páginas HTML**
   - Execute o script `auto.py`. Ele criará automaticamente páginas HTML para cada anime em seu banco de dados. Basta adicionar essas páginas à pasta `animes` para que estejam prontas para serem exibidas no site.

6. **Extensões para Requisições**
   - Caso o scraping não seja bem-sucedido devido a restrições de CORS, considere instalar uma extensão que facilite as requisições CORS para permitir o acesso aos dados necessários Ou verifique https://cors-anywhere.herokuapp.com para autorização de desenvolvedor ou novas diretivas.

7. **Observações**
   - O scraping adiciona novos dados ao seu banco de dados existente, mas não substitui os dados já salvos. Qualquer alteração manual necessária deve ser realizada diretamente.
