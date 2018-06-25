hubot-ipfs
==========

***WIP WIP WIP!***

A hubot script that lets you pin files in IPFS (and other daemon interactions)

This is a plugin-ified version of the ipfs.coffee script from https://github.com/ipfs/ipfs-hubot so
that you can easily include in an existing Hubot without just copying files around.

See [`src/ipfs.coffee`](src/ipfs.coffee) for full documentation.


TODO
----

* How to run `ipfs daemon`? Procfile will only work if you have `go-ipfs` installed already. Maybe a custom Heroku buildpack?
* Add contributors, license
* Write some basic tests


Installation
------------

In your hubot project repository, run:

`npm install hubot-ipfs --save`

Then add **hubot-ipfs** to your `external-scripts.json`:

```json
[
  "hubot-ipfs"
]
```

Example Interaction
-------------------

```
hubot> hubot ipfs pin QmXXXXXXXXXXXXXXXXXXx
hubot> FIXME what is the output
```


Contributors
------------

* Juan Benet


License
-------

TODO
