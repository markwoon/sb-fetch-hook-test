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
  fetchMock.config.overwriteRoutes = true;

  // UNCOMMENT THIS TO "fix" HMR:
  //fetchMock.config.fallbackToNetwork = true;

  return (<Hello {...args} />);
};
