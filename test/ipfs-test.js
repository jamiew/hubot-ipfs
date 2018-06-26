'use strict'

/* global beforeEach, afterEach, describe, it */
/* eslint-disable no-unused-expressions */

const path = require('path')

const chai = require('chai')
const Hubot = require('hubot')

const expect = chai.expect
const Robot = Hubot.Robot
const TextMessage = Hubot.TextMessage

chai.use(require('sinon-chai'))

describe('require("hubot-ipfs")', () => {
  it('exports a function', () => {
    expect(require('../index')).to.be.a('Function')
  })
})

describe('ipfs', () => {
  let robot, user

  beforeEach(() => {
    robot = new Robot(null, 'mock-adapter-v3', false, 'hubot')
    robot.loadFile(path.resolve('src/'), 'ipfs.coffee')
    robot.adapter.on('connected', () => robot.brain.userForId('1', {
      name: 'john',
      real_name: 'John Doe',
      room: '#test'
    }))
    robot.run()
    user = robot.brain.userForName('john')
  })

  afterEach(() => {
    robot.shutdown()
  })

  it('pins hashes', (done) => {
    robot.adapter.on('send', function (envelope, strings) {
      const lines = strings[0].split('\n')

      expect(lines.length).to.eql(4)
      expect(lines[0]).to.match(/pinning QmPZ9gcCEpqKTo6aq61g2nXGUhM4iCL3ewB6LDXZCtioEB/i)
      // expect(lines[1]).to.match(/next line/i)
      // expect(lines[2]).to.match(/one after that/i)
      // expect(lines[3]).to.match(/I think there was a 4th/i)

      done()
    })

    return robot.adapter.receive(new TextMessage(user, 'hubot pin QmPZ9gcCEpqKTo6aq61g2nXGUhM4iCL3ewB6LDXZCtioEB'))
  })
})
