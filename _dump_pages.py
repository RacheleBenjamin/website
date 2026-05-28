import json, sys
pages = json.load(open('_pdf_pages.json', encoding='utf-8'))
nums = [int(x) for x in sys.argv[1:]]
for n in nums:
    p = pages[n-1]
    print(f"=== PAGE {p['page']} ===")
    print(p['text'])
    print()
