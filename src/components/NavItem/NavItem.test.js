import {render, screen, cleanup, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import NavItem from './NavItem';

afterEach(() =>{
    cleanup()
})

it('navItem component should be rendered',() => {
    const { getByTestId } = render(<BrowserRouter><NavItem itemname={'1.Choose image'} link={'/image'}/></BrowserRouter>)

    expect(getByTestId('navitem')).toBeInTheDocument();
    
})