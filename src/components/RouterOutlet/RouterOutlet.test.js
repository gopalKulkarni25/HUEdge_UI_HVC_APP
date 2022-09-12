import {render, screen} from '@testing-library/react'
import RouterOutlet from './RouterOutlet'

test('Router Outlet component is rendered',() => {
    render(<RouterOutlet/>)
    const RouterComponent = screen.getByTestId('router-outlet')
    expect(RouterComponent).toBeInTheDocument();
})