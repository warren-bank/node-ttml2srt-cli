const path = require('path')
const fs   = require('fs')

const print_usage = function(e) {
  if (typeof e === 'string')
    console.log(e)
  else
    console.log(e.message)

  console.log('usage: ttml2srt "/path/to/input.ttml" "/path/to/output.srt"')
  process.exit(0)
}

const argv_vals = {}
try {
  const args = process.argv.slice(2)
  let val

  if (args.length > 0) {
    val = args[0]

    if (val[0] === '-') throw 'incorrect parameter format'

    val = fs.realpathSync(val, {encoding: 'utf8'})
    val = fs.readFileSync(val, {encoding: 'utf8'})

    argv_vals["ttml"] = val
  }
  else {
    throw 'missing required parameter: path to input file'
  }

  if (args.length > 1) {
    val = args[1]
  }
  else {
    val = args[0].replace(/(?:\.ttml)?$/i, '.srt')
  }
  val = path.resolve(val)
  argv_vals["srt"] = val
}
catch(e) {
  print_usage(e)
}

module.exports = argv_vals
