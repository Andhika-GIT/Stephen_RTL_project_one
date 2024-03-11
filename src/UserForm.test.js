import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserForm from './UserForm';

test('shows two inputs and a button', () => {
  // render a component
  render(<UserForm />);

  // manipulate the component or find an element in it
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  // assertion - make sure the component is doing what we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('should call onUserAdd callback when the form is submitting', async () => {
  // use jest mock function, to make sure that the function props is called
  const mock = jest.fn();

  // try to render component
  render(<UserForm onUserAdd={mock} />);

  // Find two inputs
  const nameInput = screen.getByRole('textbox', {
    name: /name/i,
  });

  const emailInput = screen.getByRole('textbox', {
    name: /email/i,
  });

  // simulate typing a name
  await userEvent.click(nameInput);
  await userEvent.keyboard('jane');

  // simulate typing an email
  await userEvent.click(emailInput);
  await userEvent.keyboard('jane@email.com');

  // find the button
  const button = screen.getByRole('button');

  // simulate clicking submit button
  await userEvent.click(button);

  // assertion - make sure the component is doing what we expect it to do
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: 'jane', email: 'jane@email.com' });
});

test('name and email input should be cleared after form is submitted', async () => {
  render(<UserForm onUserAdd={() => {}} />);

  const nameInput = screen.getByRole('textbox', {
    name: /name/i,
  });

  const emailInput = screen.getByRole('textbox', {
    name: /email/i,
  });

  const submitButton = screen.getByRole('button');

  await userEvent.click(nameInput);
  await userEvent.keyboard('herman');

  await userEvent.click(emailInput);
  await userEvent.keyboard('herman@email.com');

  await userEvent.click(submitButton);

  // Assertion -> expect the name and email input is cleared after form submit
  expect(nameInput).toHaveValue('');
  expect(emailInput).toHaveValue('');
});
