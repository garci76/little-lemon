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

test('BookingForm fields have the correct HTML5 validation attributes', () => {
    render(
        <BookingForm
            availableTimes={['17:00', '18:00']}
            dispatch={() => {}}
            date={['', () => {}]}
            time={['', () => {}]}
            guests={[1, () => {}]}
            occasion={['', () => {}]}
        />
    );

    const dateInput = screen.getByLabelText('Choose date');
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toBeRequired();

    const timeInput = screen.getByLabelText('Choose time');
    expect(timeInput).toBeRequired();

    const guestsInput = screen.getByLabelText('Number of guests');
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toBeRequired();

    const occasionInput = screen.getByLabelText('Occasion');
    expect(occasionInput).toBeRequired();
});

test('BookingForm submits valid form data', () => {
    const submitForm = jest.fn();

    render(
        <BookingForm
            availableTimes={['17:00', '19:00']}
            dispatch={() => {}}
            date={['2026-09-15', () => {}]}
            time={['19:00', () => {}]}
            guests={[4, () => {}]}
            occasion={['Birthday', () => {}]}
            submitForm={submitForm}
        />
    );

    fireEvent.submit(screen.getByRole('form', { name: /restaurant reservation form/i }));

    expect(submitForm).toHaveBeenCalledTimes(1);
    expect(submitForm).toHaveBeenCalledWith({
        date: '2026-09-15',
        time: '19:00',
        guests: 4,
        occasion: 'Birthday'
    });
    expect(screen.queryByText(/please choose/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/number of guests must be greater than 0/i)).not.toBeInTheDocument();
});

test('BookingForm rejects invalid form data and displays validation errors', () => {
    const submitForm = jest.fn();

    render(
        <BookingForm
            availableTimes={['17:00', '19:00']}
            dispatch={() => {}}
            date={['', () => {}]}
            time={['', () => {}]}
            guests={[0, () => {}]}
            occasion={['', () => {}]}
            submitForm={submitForm}
        />
    );

    fireEvent.submit(screen.getByRole('form', { name: /restaurant reservation form/i }));

    expect(screen.getByText('Please choose a date.')).toBeInTheDocument();
    expect(screen.getByText('Please choose a time.')).toBeInTheDocument();
    expect(screen.getByText('Number of guests must be greater than 0.')).toBeInTheDocument();
    expect(screen.getByText('Please choose an occasion.')).toBeInTheDocument();
    expect(submitForm).not.toHaveBeenCalled();
});

