/* globals describe, expect, it, jest */

import React from 'react'
import {mount} from 'enzyme'
import {mountToJson} from 'enzyme-to-json'

import {Pure} from '../../lib'

class PureTest extends Pure {}
PureTest.prototype.render = jest.fn(() => <div />)

describe('Pure', () => {
  it('should return an Pure element with a given type', () => {
    expect(mountToJson(mount(<PureTest />))).toMatchSnapshot()
  })
})
