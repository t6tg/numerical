import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/Dashboard'))
const BisectionPage = lazy(() => import('../pages/root/BisectionPage'))
const FalsePositionPage = lazy(() => import('../pages/root/FalsePositionPage'))
const NewtonPage = lazy(() => import('../pages/root/NewtonPage'))
const SecantPage = lazy(() => import('../pages/root/SecantPage'))
const OnepointPage = lazy(() => import('../pages/root/OnepointPage'))
const CramerPage = lazy(() => import('../pages/linear/CramerPage'))
const GaussEPage = lazy(() => import('../pages/linear/GaussEPage'))
const GaussJPage = lazy(() => import('../pages/linear/GaussJPage'))
const GaussSPage = lazy(() => import('../pages/linear/GaussSPage'))
const LUPage = lazy(() => import('../pages/linear/LUPage'))
const JacobPage = lazy(() => import('../pages/linear/JacobPage'))
const ConJPage = lazy(() => import('../pages/linear/ConJPage'))
const LinearPage = lazy(() => import('../pages/regression/LinearPage'))
const PolyPage = lazy(() => import('../pages/regression/PolyPage'))
const MultiPage = lazy(() => import('../pages/regression/MultiPage'))

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
    {
        path: '/linear/cramer',
        name: "Cramer's Rule",
        component: CramerPage,
    },
    {
        path: '/linear/gauss-e',
        name: 'Gauss-Elimination Method',
        component: GaussEPage,
    },
    {
        path: '/linear/gauss-j',
        name: 'Gauss-Jordan Method',
        component: GaussJPage,
    },
    {
        path: '/linear/lu',
        name: 'LU Decomposition Method',
        component: LUPage,
    },
    {
        path: '/linear/jacobi',
        name: 'Jacobi Iteration Method',
        component: JacobPage,
    },
    {
        path: '/linear/gauss-s',
        name: 'Gauss-Seidel',
        component: GaussSPage,
    },
    {
        path: '/linear/conj',
        name: 'Conjugate Gradient Method',
        component: ConJPage,
    },
    {
        path: '/regression/linear',
        name: 'Linear',
        component: LinearPage,
    },
    {
        path: '/regression/multi',
        name: 'MultipleLinear',
        component: MultiPage,
    },
    {
        path: '/regression/poly',
        name: 'Polynomial',
        component: PolyPage,
    },
]

export default routes
