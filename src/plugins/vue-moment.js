import VueMoment from 'vue-moment'
import moment from 'moment'

moment.locale('pt-br')
export default ({ Vue }) => {
  Vue.use(VueMoment, {moment})
}
