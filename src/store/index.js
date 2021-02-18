import { createStore, createLogger } from 'vuex'
import app from './modules/app'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    app
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
