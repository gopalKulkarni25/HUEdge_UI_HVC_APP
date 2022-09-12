import {cleanup, render, screen} from '@testing-library/react'
import InstanceType from './InstanceType'
import fireEvent from '@testing-library/user-event'

// afterEach(() => {
//     cleanup()
// })

const Selected = jest.fn()

test('Instance component should be rendered and should have instance name',() => {
    render(<InstanceType name ='General Purpose' />)
    const InstanceTypeComponent = screen.getByTestId('instancetype')
    expect(InstanceTypeComponent).toBeInTheDocument();
    expect(InstanceTypeComponent).toHaveTextContent('General Purpose')
})

test('onclick of the component call onSelected function',async () => {
    render(<InstanceType name ='General Purpose' onSelected={Selected}/>)
    const InstanceTypeComponent = screen.getByTestId('instancetype')
    fireEvent.click(InstanceTypeComponent);
    await expect(Selected).toHaveBeenCalled();
})