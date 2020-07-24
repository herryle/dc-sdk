/*
 * @Author: Caven
 * @Date: 2020-02-11 21:08:01
 * @Last Modified by: Caven
 * @Last Modified time: 2020-07-24 14:08:07
 */

import { DomUtil } from '../utils'
import State from '../state/State'
import Widget from './Widget'

class Attribution extends Widget {
  constructor() {
    super()
    this._wrapper = DomUtil.create('div', 'dc-attribution')
    this._wrapper.style.cssText = `
      position: absolute;
      left: 2px;
      bottom: 2px;
      font-size: 14px;
      color: rgb(255, 255, 255);
      background: rgba(0,0,0,0.6);
      padding: 2px 5px;
      border-radius: 2px;
      user-select: none;
    `
    this._config = undefined
    this.type = Widget.getWidgetType('attribution')
    this._state = State.INSTALLED
  }

  _installHook() {
    let span = DomUtil.create('span', '', this._wrapper)
    span.innerHTML = '数字视觉'
    span.style.cssText = `margin-right:5px;`
    let a = DomUtil.create('a', '', this._wrapper)
    a.innerHTML = 'Digital Visual'
    a.href = 'javascirpt:void(0)'
    a.onclick = () => {
      window.open('http://www.dvgis.cn')
    }
    a.style.cssText = `color:#0078A8;font-size:12px`
    this.enable = true
  }
}

Widget.registerType('attribution')

export default Attribution
