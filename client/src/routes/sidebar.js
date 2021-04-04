/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
    {
        path: '/app/dashboard', // the url
        icon: 'HomeIcon', // the component being exported from icons/index.js
        name: 'Dashboard', // name that appear in Sidebar
    },
    {
        icon: 'MoneyIcon',
        name: 'Root of Equation',
        routes: [
            {
                path: '/app/root/bisection',
                name: 'Bisection',
            },
            {
                path: '/app/root/false-position',
                name: 'False Position',
            },
            {
                path: '/app/root/newton',
                name: 'Newton Raphson',
            },
            {
                path: '/app/root/onepoint',
                name: 'One Point',
            },
            {
                path: '/app/root/secant',
                name: 'Secant',
            },
        ],
    },
]

export default routes
