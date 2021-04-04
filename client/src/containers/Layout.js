import React, { useContext, Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import routes from '../routes'

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Main from '../containers/Main'
import ThemedSuspense from '../components/ThemedSuspense'
import { SidebarContext } from '../context/SidebarContext'

const Page404 = lazy(() => import('../pages/404'))

function Layout() {
    const { isSidebarOpen } = useContext(SidebarContext)

    return (
        <div
            className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
                isSidebarOpen && 'overflow-hidden'
            }`}
        >
            <Sidebar />

            <div className="flex flex-col flex-1 w-full">
                <Header />
                <Main>
                    <Suspense fallback={<ThemedSuspense />}>
                        <Switch>
                            {routes.map((route, i) => {
                                return route.component ? (
                                    <Route
                                        key={i}
                                        exact={true}
                                        path={`/app${route.path}`}
                                        render={(props) => (
                                            <route.component {...props} />
                                        )}
                                    />
                                ) : null
                            })}
                            <Redirect exact from="/app" to="/app/dashboard" />
                            <Route component={Page404} />
                        </Switch>
                    </Suspense>
                </Main>
            </div>
        </div>
    )
}

export default Layout
