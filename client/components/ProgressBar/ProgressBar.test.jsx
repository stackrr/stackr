import { render, screen } from '@testing-library/react';
import ProgressBar from './ProgressBar';
// import { describe, test } from 'vitest';

describe('Progress Bar test', () => {
    test("Progress bar should display with passed percentage", () => {

        render(<ProgressBar completed={20}/>);
        const progressBar = screen.getByText('20%');
        expect(progressBar).toBeInTheDocument();
    })
});