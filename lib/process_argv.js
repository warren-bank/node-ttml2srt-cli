const path = require('path')
const fs   = require('fs')

const argv_vals = {}
try {
  const args = process.argv.slice(2)
  let val

  if (args.length > 0) {
    val = args[0]
    val = fs.realpathSync(val, {encoding: 'utf8'})
    val = fs.readFileSync(val, {encoding: 'utf8'})

    argv_vals["ttml"] = val
  }

  if (args.length > 1) {
    val = args[1]
  }
  else {
    val = args[1].replace(/(?:\.ttml)?$/i, '.srt')
  }
  val = path.resolve(val)
  argv_vals["srt"] = val
}
catch(e) {
  console.log('ERROR: ' + e.message)
  process.exit(0)
}

module.exports = argv_vals
