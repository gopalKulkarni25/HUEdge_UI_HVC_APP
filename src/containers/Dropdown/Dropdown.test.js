import {render, screen, cleanup} from '@testing-library/react'
import Dropdown from './Dropdown'
import fireEvent from '@testing-library/user-event'

afterEach(() =>{
    cleanup()
})

describe('DropDown component should be rendered ', () => {
    render(<Dropdown options={['test']}/>)
    const DropdownComponent = screen.getByTestId('dropdown');
    expect(DropdownComponent).toBeInTheDocument();
    const click = screen.getByTestId('click');
        fireEvent.click(click);
    it('options should be displayed',() => {
        expect(DropdownComponent).toHaveTextContent('test');
    })

    // it('on selecting option the options section should be hidden',async() => {
    //     const option = await screen.getByRole('options');
    //     fireEvent.click(option);
    //     expect(DropdownComponent).toHaveTextContent('test');
    // })
    
})


