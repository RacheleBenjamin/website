import json, sys

start = int(sys.argv[1]) if len(sys.argv) > 1 else 0
end = int(sys.argv[2]) if len(sys.argv) > 2 else start + 25

with open('_pdf_pages.json', encoding='utf-8') as f:
    pages = json.load(f)

for p in pages[start:end]:
    num = p['page']
    txt = p['text'][:500]
    print(f'=== PAGE {num} ===')
    print(txt)
    print()
