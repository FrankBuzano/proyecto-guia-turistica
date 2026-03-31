import re
import os

filepath = "/Users/m1pro/Desktop/Aprendizaje/UCR/Multimedios/project/Proyecto-Guia-Turistica/antigravity/resources/mapa-interactivo-cr (1).html"
outpath = "/Users/m1pro/Desktop/Aprendizaje/UCR/Multimedios/project/Proyecto-Guia-Turistica/components/interactive-map.js"

print("Reading from:", filepath)
with open(filepath, "r", encoding="utf-8") as f:
    html_content = f.read()

# Extract script content
match = re.search(r'<script>\s*(class MapaCostaRica.*?customElements\.define[^\n]*;)\s*</script>', html_content, re.DOTALL)

if match:
    js_content = match.group(1)
    with open(outpath, "w", encoding="utf-8") as out:
        out.write(js_content)
    print("Extracted successfully.")
else:
    print("Script not found.")
