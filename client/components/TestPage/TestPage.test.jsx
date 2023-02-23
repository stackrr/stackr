import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TestPage from './TestPage';

describe('TestPage', () => {

    const func = vi.fn();

    const props = {
        handleClick: func,
        stackChoices: ['p'],
        setStackChoices: func,
        nextPage: 'next page',
        prevPage: 'prev page',
        data:[
            {
                name: 'mock data',
                type: 'mock',
            }
        ],
        completed: true,
    }

    test("Test page has correct title", () => {
        render(
            <MemoryRouter>
                <TestPage {...props}/>
            </MemoryRouter>
        );
        const cc = screen.getByText('stackr');
        expect(cc).toBeInTheDocument();
    })

    test("Test page has two buttons", async () => {
        render(
            <MemoryRouter>
                <TestPage {...props}/>
            </MemoryRouter>
        );
        const cc = await screen.getAllByRole('button');
        // console.log(cc);
        expect(cc).toHaveLength(2)
    })

    test("Select button can be clicked", async () => {
        render(
            <MemoryRouter>
                <TestPage {...props}/>
            </MemoryRouter>
        );
        const cc = await screen.getAllByRole('button');
        fireEvent.click(cc[0]);
        expect(props.handleClick).toHaveBeenCalled();
    })

    test("Continue button exists", async () => {
        render(
            <MemoryRouter>
                <TestPage {...props}/>
            </MemoryRouter>
        );
        const continueButton = screen.getByText('Continue');
        expect(continueButton).toBeInTheDocument();
    })

    test("Continue button can be clicked", async () => {
        render(
            <MemoryRouter>
                <TestPage {...props}/>
            </MemoryRouter>
        );
        const continueButton = screen.getByText('Continue');
        fireEvent.click(continueButton);
        expect(props.handleClick).toHaveBeenCalled();
    })
    test("Select button adds choice to stackChoiceBar", async () => {
        render(
            <MemoryRouter>
                <TestPage {...props}/>
            </MemoryRouter>
        );
        const cc = await screen.getAllByRole('button');
        const stackCB = await screen.getByTestId('stackChoiceBar');
        fireEvent.click(cc[0]);
        const choice = await screen.getByTestId('stackChoice');
        // console.log('stackCB:', stackCB);
        console.log(stackCB.childNodes.length)
        expect(choice).toBeInTheDocument();
    })
})