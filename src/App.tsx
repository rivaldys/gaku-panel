import { Router } from 'gaku/router'
import { store } from 'gaku/services'
import { Provider } from 'react-redux'

const App = () =>
{
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    )
}

export default App