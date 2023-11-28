import { render, screen, act, fireEvent, waitFor } from "@testing-library/react";
import { within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import BookingForm from './BookingForm';
import { fetchAPI } from './mockAPI';


jest.mock('./mockAPI'); // Mock the fetchAPI function

describe('BookingForm', () => {
  const mockSetAvailableTimes = jest.fn();
  const mockTimes = ['10:00', '11:00', '12:00'];

  beforeEach(() => {
    fetchAPI.mockResolvedValue(mockTimes);
  });

  test('Calls setAvailableTimes with the correct arguments when the component is mounted', async () => {
    render(
      <BookingForm 
        date="2022-12-31" 
        setDate={() => {}} 
        guests="" 
        setGuests={() => {}} 
        occasion="" 
        setOccasion={() => {}} 
        availableTimes={[]} 
        setAvailableTimes={mockSetAvailableTimes} 
        time="" 
        setTime={() => {}} 
        submitForm={() => {}} 
        fetchAPI={fetchAPI}
      />
    );

    // Wait for the fetchAPI function to be called
    await waitFor(() => expect(fetchAPI).toHaveBeenCalled());

    // Check if setAvailableTimes was called with the correct argument
    const expectedTimes = mockTimes.map(time => ({ value: time, label: time }));
    expect(mockSetAvailableTimes).toHaveBeenCalledWith(expectedTimes);
  });
});

test('Renders the "Choose date" label in the BookingForm component', () => {
  render(<BookingForm date="" guests="" occasion="" availableTimes={[]} dispatch={() => {}} time="" setTime={() => {}} />);
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

test('Date input has correct attributes', () => {
  render(<BookingForm date="" guests="" occasion="" availableTimes={[]} dispatch={() => {}} time="" setTime={() => {}} />);
  const dateInput = screen.getByLabelText('Choose date');
  expect(dateInput).toHaveAttribute('type', 'date');
  expect(dateInput).toHaveAttribute('min');
});

test('Submit button is disabled when form is invalid', () => {
  render(<BookingForm date="" guests="" occasion="" availableTimes={[]} dispatch={() => {}} time="" setTime={() => {}} />);
  const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
  expect(submitButton).toBeDisabled();
});

test('Submit button is enabled when form is valid', () => {
  fetchAPI.mockResolvedValue(['10:00', '11:00', '12:00']); // Mock the return value of fetchAPI

  render(<BookingForm date="2022-12-31" guests={{ value: '1', label: '1' }} occasion="Dinner" availableTimes={[{ value: '10:00', label: '10:00' }]} dispatch={() => {}} time={{ value: '10:00', label: '10:00' }} setTime={() => {}} fetchAPI={fetchAPI} setAvailableTimes={jest.fn()} />);
  
  const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
  expect(submitButton).toBeEnabled();
});