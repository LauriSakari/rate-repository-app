import { Text, View } from 'react-native'
import { render } from '@testing-library/react-native'

const Greeting = ({ name }) => {
  return (
    <View>
      <Text>Hello {name}!</Text>
    </View>
  )
}

describe('Greeting', () => {
  it('renders a greeting message based on the name prop', () => {
    const { debug, getByText } = render(<Greeting name="Kalle" />)
    const examp = getByText('Hello Kalle!')

    console.log('example', examp)
    debug()
    expect(examp).toHaveTextContent('Hello Kalle!')
  })
})