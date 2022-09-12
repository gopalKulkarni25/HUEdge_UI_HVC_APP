import {cleanup, render, screen} from '@testing-library/react'
import SuccessModel from './SuccessModel'
import userEvent from '@testing-library/user-event'

afterEach(() => {
    cleanup();
})

const original = window.location;

  const reloadFn = () => {
    window.location.reload(true);
  };

  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: { reload: jest.fn() },
    });
  });

  afterAll(() => {
    Object.defineProperty(window, 'location', { configurable: true, value: original });
  });

test('Success component should be rendered with heading and description',() => {
    render(<SuccessModel/>)
    const successComponent = screen.getByTestId('success')
    expect(successComponent).toBeInTheDocument();
    expect(successComponent).toHaveTextContent('Success')
    expect(successComponent).toHaveTextContent('VM(s) Created with provided configurations successfully!')
})

test('On click of cancel user should be redirected',()=>{
    render(<SuccessModel/>)
    userEvent.click(screen.getByText('X'))
    expect(window.location.reload).toHaveBeenCalled()
})