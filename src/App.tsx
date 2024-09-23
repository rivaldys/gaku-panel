import { FlashMessage } from 'gaku/components'
import { Router } from 'gaku/router'
import { store } from 'gaku/services'
import { Bus } from 'gaku/utils'
import { Provider } from 'react-redux'

const App = () =>
{
    window.flash = (message = '', type = 'success') => Bus.emit('flash-message', ({ message, type }))

    return (
        <Provider store={store}>
            <FlashMessage />
            <Router />
        </Provider>
    )
}

export default App