### [ttml2srt](https://github.com/warren-bank/node-ttml2srt-cli)

An extremely lightweight command-line utility to convert a subtitle file from .ttml to .srt format

- - - -

#### Installation (global w/ npm):

```bash
npm install --global @warren-bank/node-ttml2srt-cli
```

#### Binary (global):

```bash
ttml2srt '/path/to/file.ttml' '/path/to/file.srt'
```

- - - -

#### Installation (local w/ wget via github):

```bash
mkdir 'workspace'
cd    'workspace'

wget --content-disposition --no-check-certificate 'https://github.com/warren-bank/node-ttml2srt-cli/archive/master.zip'
unzip 'node-ttml2srt-cli-master.zip'
rm -f 'node-ttml2srt-cli-master.zip'

cd 'node-ttml2srt-cli-master'
npm install
```

#### Binary (local):

```bash
npm start -- '/path/to/file.ttml' '/path/to/file.srt'
```

- - - -

#### Credits:

* this project merely adds a CLI wrapper to easily access and use the library: [ttml2srt](https://github.com/seiya-npm/ttml2srt)

#### Legal:

* copyright: [Warren Bank](https://github.com/warren-bank)
* license: [GPL-2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt)
