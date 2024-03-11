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
  render(<UserList users={users} />);

  // find all rows in the table
  const rows = screen.getAllByRole('row');

  expect(rows).toHaveLength(2);
});
