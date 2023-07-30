import type { Meta, StoryObj } from '@storybook/react';

import {getUserList} from '../msw-handlers'
import { UserList } from '../user-list';

const meta = {
  title: 'User / User List',
  component: UserList,
  parameters: {
    msw: {
      handlers: [getUserList],
    },
  },
} satisfies Meta<typeof UserList>;

export default meta;
type ListUserStory = StoryObj<typeof meta>;

export const Example: ListUserStory = {
    render: () => (<UserList />),
  };
  