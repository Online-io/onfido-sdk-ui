import { h, Component } from 'preact'

import Title from '../../Title'
import theme from '../../Theme/style.css'
import style from './style.css'
import { trackComponent } from '../../../Tracker'
import { localised } from '../../../locales'

class ClientSuccess extends Component {
  componentDidMount () {
    this.props.sendClientSuccess()
  }

  render () {
    const { t } = this.props
    return (
      <div>
        <Title title={t('cross_device.client_success.title')} subTitle={t('cross_device.client_success.sub_title')} />
        <div class={theme.thickWrapper}>
          <span className={`${theme.icon}  ${style.icon}`} />
          <div className={style.text}>{t('cross_device.client_success.body')}</div>
        </div>
      </div>
    )
  }
}

export default trackComponent(localised(ClientSuccess), 'crossdevice_mobile_success')
