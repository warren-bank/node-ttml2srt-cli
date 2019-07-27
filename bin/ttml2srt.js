#! /usr/bin/env node

const argv_vals  = require('../lib/process_argv')
const {ttml2srt} = require('../lib/ttml2srt')
const fs         = require('fs')

const srt_string = ttml2srt(argv_vals["ttml"])

if (!srt_string) {
  console.log('ERROR: no .srt output')
  process.exit(0)
}

fs.writeFileSync(argv_vals["srt"], srt_string)
