import SignInScreen from '../src/views/signin';
import { render, fireEvent, screen } from '@testing-library/react-native';
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('SignInScreen', () => {
    it('renders correctly', () => {
        const navigation = {
            navigate: jest.fn(),
        };

        render(<SignInScreen navigation={navigation} />);

        const emailInput = screen.getByPlaceholderText('Email');
        const passwordInput = screen.getByPlaceholderText('Password');
        const signInButton = screen.getByText('SIGN IN');

        expect(emailInput).toBeTruthy();
        expect(passwordInput).toBeTruthy();
        expect(signInButton).toBeTruthy();
    });

    it('navigates to Sign Up screen when Sign Up button is pressed', () => {
        const navigation = {
            navigate: jest.fn(),
        };
        const { getByText } = render(<SignInScreen navigation={navigation} />);
        const signUpButton = getByText('Sign up');

        fireEvent.press(signUpButton);

        
        expect(navigation.navigate).toHaveBeenCalledWith('SignUp');
    });

    it('updates email and password state when input fields are changed', () => {
        const navigation = {
            navigate: jest.fn(),
        };
        const { getByPlaceholderText } = render(<SignInScreen navigation={navigation} />);
        const emailInput = getByPlaceholderText('Email');
        const passwordInput = getByPlaceholderText('Password');

        fireEvent.changeText(emailInput, 'test@example.com');
        fireEvent.changeText(passwordInput, 'testpassword123');

  
        expect(emailInput.props.value).toBe('test@example.com');
        expect(passwordInput.props.value).toBe('testpassword123');
    });

});
