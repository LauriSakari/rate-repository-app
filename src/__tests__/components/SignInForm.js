import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { SignInForm } from '../../components/SignIn';
// ...

describe('SignIn', () => {
  describe('SignInForm', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
    const onSubmit = jest.fn();
    const { debug, getByPlaceholderText, getByText } = render(<SignInForm onSubmit={onSubmit}/>);

    debug()
    fireEvent.changeText(getByPlaceholderText('Username'), 'kalle');
    fireEvent.changeText(getByPlaceholderText('Password'), 'password');
    fireEvent.press(getByText('Sign In'));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);

        //onSubmit.mock.calls[0][0] contains the first argument of the first call
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'kalle',
          password: 'password',
        });
      });
    });
  });
});