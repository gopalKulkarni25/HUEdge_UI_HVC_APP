import {render, screen} from '@testing-library/react'
import Header from './Header'

test('Header component should be rendered and heading should be displayed',() => {
    render(<Header heading='HVC'/>)
    const HeaderComponent = screen.getByTestId('header')
    expect(HeaderComponent).toBeInTheDocument();
    expect(HeaderComponent).toHaveTextContent('HVC')
})