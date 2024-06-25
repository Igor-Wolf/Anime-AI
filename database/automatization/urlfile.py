import re

# Lista contendo o iframe
array = [

'<iframe width="1280" height="720" src="https://www.youtube.com/embed/Cz23IjHbUJY" title="Sankerea - Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'<iframe width="1280" height="720" src="https://www.youtube.com/embed/-BP9CHXtvec" title="Sankarea Funimation Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'

]
# Função para extrair a URL do iframe usando regex
def extrair_url_iframe(html):
    # Expressão regular para encontrar a URL dentro do atributo 'src' do iframe
    regex = r'src=\"(https:\/\/www\.youtube\.com\/embed\/[^\"]+)\"'
    
    # Procurar por correspondências na string HTML
    match = re.search(regex, html)
    if match:
        return match.group(1)
    else:
        return None

# Iterar sobre a lista e extrair a URL de cada iframe
for iframe_html in array:
    url = f'"{extrair_url_iframe(iframe_html)}",'
    if url:
        print(url)
    else:
        print("Nenhuma URL encontrada.")
