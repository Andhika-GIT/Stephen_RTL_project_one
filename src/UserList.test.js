import { render, screen } from '@testing-library/react';
import UserList from './UserList';

test('render one row per user', () => {
  // render component
  const users = [
    {
      name: 'jane',
      email: 'jane@email.com',
    },
    {
      name: 'sam',
      email: 'sam@email.com',
    },
  ];

  const { container } = render(<UserList users={users} />);

  // find all rows in the table
  // eslint-disable-next-line
  const rows = container.querySelectorAll('tbody tr');

  expect(rows).toHaveLength(2);
});

test('render the name and email of each user', () => {
  // render component
  const users = [
    {
      name: 'jane',
      email: 'jane@email.com',
    },
    {
      name: 'sam',
      email: 'sam@email.com',
    },
  ];

  render(<UserList users={users} />);

  for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
