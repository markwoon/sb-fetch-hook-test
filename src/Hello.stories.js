import fetchMock from 'fetch-mock';

import Hello from './Hello';

export default {
  title: 'Hello',
  component: Hello,
};


export const Default = (args) => {
  fetchMock.get('https://jsonplaceholder.typicode.com/users', [
    {
      name: 'Jack Reacher',
    }
  ]);

  return (<Hello {...args} />);
};
