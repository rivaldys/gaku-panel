import { Provider } from 'react-redux'
import { FlashMessage } from './components'
import { RouteLister } from './routes'
import store from './services/store'
import Bus from './utils/Bus'

const App = () =>
{
    window.flash = (message, type = "success") => Bus.emit('flash-message', ({ message, type }))

    return (
        <Provider store={store}>
            <FlashMessage />
            <RouteLister />
        </Provider>
    )
}

export default App