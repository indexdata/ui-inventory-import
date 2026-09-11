// jsdom does not implement ResizeObserver, which stripes-components'
// <TextArea> constructs when it mounts.
global.ResizeObserver = jest.fn().mockImplementation(() => {
  return {
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  };
});
