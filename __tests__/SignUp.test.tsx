import SignUpScreen from '../src/views/SignUp';
import { render, fireEvent, screen } from '@testing-library/react-native';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('SignUpScreen', () => {
    it('renders correctly', () => {
        const navigation = {
            navigate: jest.fn(),
        };

        render(<SignUpScreen navigation={navigation} />);

        // Ensure that the email and password input fields are present
        const emailInput = screen.getByPlaceholderText('Email');
        const passwordInput = screen.getByPlaceholderText('Password');
        const signUpButton = screen.getByText('SIGN UP');

        expect(emailInput).toBeTruthy();
        expect(passwordInput).toBeTruthy();
        expect(signUpButton).toBeTruthy();
    });

    it('navigates to Sign In screen when Sign In button is pressed', () => {
        const navigation = {
            navigate: jest.fn(),
        };
        const { getByText } = render(<SignUpScreen navigation={navigation} />);
        const signInButton = getByText('Sign In');

        fireEvent.press(signInButton);

        // Ensure that the navigation function was called with the correct argument
        expect(navigation.navigate).toHaveBeenCalledWith('SignIn');
    });

    it('updates email and password state when input fields are changed', () => {
        const navigation = {
            navigate: jest.fn(),
        };
        const { getByPlaceholderText } = render(<SignUpScreen navigation={navigation} />);
        const emailInput = getByPlaceholderText('Email');
        const passwordInput = getByPlaceholderText('Password');

        fireEvent.changeText(emailInput, 'test@example.com');
        fireEvent.changeText(passwordInput, 'testpassword123');

        // Ensure that the component state has been updated correctly
        expect(emailInput.props.value).toBe('test@example.com');
        expect(passwordInput.props.value).toBe('testpassword123');
    });

    // Add more tests for other functionality as needed
});
