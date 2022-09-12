import {render, screen, cleanup, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import InstanceContainer from '../../containers/InstanceContainer/InstanceContainer';
import { createMemoryHistory } from 'history';

import ImageCard from './ImageCard'

afterEach(() =>{
    cleanup()
})

describe('Image Component initail render and dsiplay appropriate info and route on clicking select', () => {
    render(
    <BrowserRouter>
    <ImageCard name={"image"} desc={"image desc"} radios={[{
                        id:1,
                        name:'64-bit (ARM)',
                        price: '290'
                    },{
                        id:2,
                        name:'64-bit (x86)',
                        price: '290'
                    }]}/>
    </BrowserRouter>);
    const ImageComponent = screen.getByTestId('image');
    const ImageButton = screen.getByTestId('image-button-select');

    it('Image component should be rendered' , () => {
        expect(ImageComponent).toBeInTheDocument();
    })
    it('Image Component has name and description',() => {
        expect(ImageComponent).toHaveTextContent("image");
        expect(ImageComponent).toHaveTextContent("image desc");
    })
    it('Image component should have select button',() => {
        expect(ImageButton).toHaveTextContent('Select');
    })

    it('Image componet should contain radio button', () => {
        expect(ImageComponent).toHaveTextContent('64-bit');
    })

    it('on clicking select button route to instance component', async () => {
        fireEvent.click(ImageButton);
    }) 

})
