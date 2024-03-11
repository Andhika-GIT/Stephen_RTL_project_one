import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('can receive new user and display it in the list', async () => {
  render(<App />);

  const nameInput = screen.getByRole('textbox', {
    name: /name/i,
  });

  const emailInput = screen.getByRole('textbox', {
    name: /email/i,
  });

  const submitButton = screen.getByRole('button');

  // user enter name
  await userEvent.click(nameInput);
  await userEvent.keyboard('hendry');

  // user enter email
  await userEvent.click(emailInput);
  await userEvent.keyboard('hendry@email.com');

  // user click submit button to add new list
  await userEvent.click(submitButton);

  // get the new name
  const newNameList = screen.getByRole('cell', {
    name: 'hendry',
  });

  // get the new email
  const newEmailList = screen.getByRole('cell', {
    name: 'hendry@email.com',
  });

  // Assertion -> expect the name and email to be in the list after user submitting form
  expect(newNameList).toBeInTheDocument();
  expect(newEmailList).toBeInTheDocument();
});
