import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/react';
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
  // 1. not the best implementation

  // try to render component
  render(<UserForm />);

  // Find two inputs
  const [nameInput, emailInput] = screen.getAllByRole('textbox');

  // simulate typing a name
  await userEvent.click(nameInput);
  await userEvent.keyboard('jane');

  // simulate typing an email
  await userEvent.click(emailInput);
  await userEvent.keyboard('jane@email.com');

  // find the button
  const button = screen.getByRole('button');

  // simulate clicking submit button
  userEvent.click(button);

  // assertion - make sure the component is doing what we expect it to do
});
