// Encrypts case-study HTML files in /dist with StatiCrypt.
// Run after `vite build`. Requires STATICRYPT_PASSWORD env var.

import { execSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import path from 'node:path'

const password = process.env.STATICRYPT_PASSWORD

if (!password) {
  console.warn('⚠️  STATICRYPT_PASSWORD not set — skipping encryption (case studies will publish UNPROTECTED).')
  process.exit(0)
}

const files = [
  'dist/case-study-shopping.html',
  'dist/case-study-open-banking.html',
  'dist/case-study-copilot.html',
]

for (const file of files) {
  if (!existsSync(file)) {
    console.warn(`⚠️  Skipping missing file: ${file}`)
    continue
  }
  console.log(`🔒 Encrypting ${file}`)
  // -d <dir>  → write the encrypted file into <dir> with the same basename,
  //             which overwrites the original in place.
  // --short   → cleaner output URL (no #ENC fragment for state).
  execSync(
    `npx staticrypt "${file}" --password "${password}" --short -d "${path.dirname(file)}"`,
    { stdio: 'inherit' },
  )
}

console.log('✅ Case studies encrypted')
