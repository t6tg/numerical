import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/Dashboard'))
const BisectionPage = lazy(() => import('../pages/root/BisectionPage'))
const FalsePositionPage = lazy(() => import('../pages/root/FalsePositionPage'))
const NewtonPage = lazy(() => import('../pages/root/NewtonPage'))
const SecantPage = lazy(() => import('../pages/root/SecantPage'))
const OnepointPage = lazy(() => import('../pages/root/OnepointPage'))

const routes = [
    {
        path: '/dashboard', // the url
        component: Dashboard, // view rendered
    },
    {
        path: '/root/bisection',
        name: 'Bisection',
        component: BisectionPage,
    },
    {
        path: '/root/false-position',
        name: 'False Position',
        component: FalsePositionPage,
    },
    {
        path: '/root/newton',
        name: 'Newton Raphson',
        component: NewtonPage,
    },
    {
        path: '/root/onepoint',
        name: 'One Point',
        component: OnepointPage,
    },
    {
        path: '/root/secant',
        name: 'Secant',
        component: SecantPage,
    },
]

export default routes
