import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CarouselCard from './CarouselCard';

describe('Carousel Card Tests', () => {
    test("Should render two elements", () => {

        render(<CarouselCard />);
        const cc = screen.getAllByRole('generic');
        expect(cc).toHaveLength(2);
    })

    test('Should render passed in text', () => {
        const textProp = "display this";
        render(<CarouselCard text={textProp}/>);
        
        const cc = screen.getByText('display this');
        expect(cc).toBeInTheDocument();
    })

    test('Passed in text should match displayed text', () => {
        const textProp = "display this";
        render(<CarouselCard text={textProp}/>);     
        const cc = screen.getByText('display this');
        expect(cc).toHaveTextContent('display this');
    })
})