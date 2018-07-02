# hubot-ipfs

![Cool robot saying "I have pinned the things"](https://github.com/jamiew/ipfs-hubot/blob/master/img/ipfs-hubot.png)

A hubot script that lets you interact with a local IPFS daemon, including pinning files.

This is a script/plugin-ified version of the `ipfs.coffee` script by @jbenet: https://github.com/ipfs/ipfs-hubot

## Commands

* `hubot pin QmDEADBEEF...` -- pin files
* `hubot ipfs api-info` -- show configured local and global gateways
* `hubot ipfs swarm peers`
* and almost all other `go-ipfs` daemon commands
* See [`src/ipfs.coffee`](src/ipfs.coffee) for full documentation.

Ouput Looks like this:

```
hubot> hubot ipfs pin QmXXXXXXXXXXXXXXXXXXx
hubot> TODO FIXME show don't tell. Add a screenshot
```

## Installation

This assumes you already have [setup a Hubot.](https://hubot.github.com/docs/)

In your hubot project repository, run:

`npm install hubot-ipfs --save`

Then add **hubot-ipfs** to your `external-scripts.json`:

```json
[
  "hubot-ipfs"
]
```

## Configuration

Some things in life you can't change, but these things you can.

* `IPFS_LOCAL_API` (default=localhost:5001)
* `IPFS_LOCAL_GATEWAY` (default=http://localhost:8088)
* `IPFS_GLOBAL_GATEWAY` (default=https://ipfs.io/ipfs)


## Development

Clone this repository, then:

```
npm install
```

To run tests:

```
npm test
```

To actually work on the script, it's easiest to setup a Hubot and include your
local `hubot-ipfs` plugin as a dependency. e.g. in the hubot's `package.json`, something like:

```
 	"dependencies": {
    "hubot": "^2.19.0",
    "hubot-ipfs": "file:~/dev/hubot-ipfs"
  },
```

Protip: try out the `hubot-reload` plugin so you don't have to restart your REPL on changes


## Publishing a new version

```
npm run semantic-release
```


## Contribute

Feel free to join in. All welcome. Open an [issue](https://github.com/ipfs/ipfs-hubot/issues)!

This repository falls under the IPFS [Code of Conduct](https://github.com/ipfs/community/blob/master/code-of-conduct.md).

**Want to hack on IPFS?**

[![](https://cdn.rawgit.com/jbenet/contribute-ipfs-gif/master/img/contribute.gif)](https://github.com/ipfs/community/blob/master/contributing.md)

## License

[MIT](LICENSE) © Protocol Labs Inc.

