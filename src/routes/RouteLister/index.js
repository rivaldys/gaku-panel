import { Suspense } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { AppLayout } from '../../components'
import routes from '../routes'

const RouteLister = () =>
{
    return (
        <BrowserRouter>
            <Switch>
                {routes.map((route, index) =>
                    route.component ? (
                        <Route
                            exact={true}
                            path={route.path}
                            render={props => route.name === 'Login' ? (
                                <Suspense fallback={<div>Loading...</div>}>
                                    <route.component {...props} />
                                </Suspense>
                            ) : (
                                <AppLayout
                                    pageTitle={route.name}
                                    createButton={route.create_button ? route.create_button : false}
                                    rootInfo={route.root ? route.root : false}
                                >
                                    <route.component {...props} />
                                </AppLayout>
                            )}
                            key={index}
                        />
                    ) : (
                        route.redirect_to && (
                            <Redirect
                                exact={true}
                                from={route.path}
                                to={route.redirect_to}
                                key={index}
                            />
                        )
                    )
                )}
            </Switch>
        </BrowserRouter>
    )
}

export default RouteLister