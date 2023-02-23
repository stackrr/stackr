import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
// import { describe, test } from 'vitest';
import { getRoles } from '@testing-library/react';

describe('Home Page tests', () => {
    test("Should render", () => {

        render(
            <MemoryRouter>
                <Home nextPage={'/next'}/>
            </MemoryRouter>
        );
        const home = screen.getByText('Build Your Tech Stack');
        expect(home).toBeInTheDocument();
    })

    test('Home page should be visible', () => {
        render(
            <MemoryRouter>
                <Home nextPage={'/next'}/>
            </MemoryRouter>
        );
        
        const home = screen.getByText('Build Your Tech Stack');
        expect(home).toBeVisible()


    })
})