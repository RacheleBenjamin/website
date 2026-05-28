import pdfplumber, json

pages_out = []
with pdfplumber.open('User Interviews Open Banking complete.pdf') as pdf:
    total = len(pdf.pages)
    print(f'TOTAL PAGES: {total}')
    for i, page in enumerate(pdf.pages):
        text = page.extract_text() or ''
        pages_out.append({'page': i+1, 'text': text})

with open('_pdf_pages.json', 'w', encoding='utf-8') as f:
    json.dump(pages_out, f, ensure_ascii=False, indent=2)

print('Written _pdf_pages.json')
for p in pages_out[:15]:
    num = p['page']
    txt = p['text'][:400]
    print(f'=== PAGE {num} ===')
    print(txt)
    print()
