import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { initializeTimes, updateTimes } from './components/Main';
import {BookingForm} from "./components/BookingPage/BookingForm";

test('Renders the Header heading', () => {
    render(
        <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
            <App />
        </BrowserRouter>
    );
    const headingElement = screen.getByText("Reserve Table");
    expect(headingElement).toBeInTheDocument();

    const reserveButton = screen.getByRole('link', { name: /reserve table/i });
    fireEvent.click(reserveButton);

    const headingElementNew = screen.getByText("Choose date");
    expect(headingElementNew).toBeInTheDocument();
})

test('initializeTimes returns non empty array', () => {
    const availableTimes = initializeTimes();
    expect(availableTimes).toEqual(expect.any(Array));
    expect(availableTimes.length).toBeGreaterThan(0);
});

test('updateTimes returns the available times provided in state', () => {
    const availableTimes = ["17:00", "17:30", "18:30", "19:00", "20:30", "21:00", "22:00", "23:30"];

    expect(updateTimes(availableTimes, "2026-09-11")).toEqual(availableTimes);
});

test('BookingForm can be submitted by the user', () => {
    const dateState = ['', () => {}];
    const timeState = ['', () => {}];
    const guestsState = [1, () => {}];
    const occasionState = ['Birthday', () => {}];

    render(
        <BookingForm
            availableTimes={['17:00', '18:00']}
            dispatch={() => {}}
            date={dateState}
            time={timeState}
            guests={guestsState}
            occasion={occasionState}
        />
    );

    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    expect(submitButton).toBeInTheDocument();
});