import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Card from './Card';

describe('Card Tests', () => {

    const handleClick = vi.fn()

    const props = {
        data: {
            name: 'Framework Name',
            type: 'Bundler/front/back/db',
            description: 'a description of this choice',
            gitHubStars: 100,
            pros: [
                'a pro',
                'another pro',
                'third pro',
            ],
            cons: ['a con', 'another con'],
            links: ['https://google.com']

        },
        handleClick: handleClick,
        option: 'placeholder',
    }

    test("Should render two elements", () => {
        render(<Card {...props}/>);
        // const cc = screen.getAllByRole('generic');
        // expect(cc).toHaveLength(2);
    })

    // test('Should render passed in text', () => {
    //     const textProp = "display this";
    //     render(<Card text={textProp}/>);
        
    //     const cc = screen.getByText('display this');
    //     expect(cc).toBeInTheDocument();
    // })

    // test('Passed in text should match displayed text', () => {
    //     const textProp = "display this";
    //     render(<Card text={textProp}/>);     
    //     const cc = screen.getByText('display this');
    //     expect(cc).toHaveTextContent('display this');
    // })
})