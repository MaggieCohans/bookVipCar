import '@testing-library/jest-native/extend-expect';

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Setup Reanimated mocking for Drawer navigation
global.ReanimatedDataMock = { now: () => Date.now() };
jest.mock("react-native-reanimated", () =>
      require("react-native-reanimated/mock")
);