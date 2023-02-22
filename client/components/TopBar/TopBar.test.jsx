import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TopBar from './TopBar';
// import { describe, test } from 'vitest';
import { getRoles } from '@testing-library/react';

describe('TopBar tests', () => {
    test("Should render", () => {
        render(<TopBar />)
        const top = screen.getByText('stackr');
        expect(top).toBeInTheDocument();
    })

    test('logo should be centered on the page', () => {
        render(<TopBar />)
        const top = screen.getByRole('heading');
        expect(top).toHaveProperty('className');


    })
    test('logo should be visible', () => {
        render(<TopBar />)
        const top = screen.getByRole('heading');
        expect(top).toBeVisible()


    })
});