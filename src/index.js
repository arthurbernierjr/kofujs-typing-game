import { Komponent , render} from 'kofujs'
import DynamicTyping from './components/DynamicTyping'


class App extends Komponent{
  constructor (props)  {
    super (props)
  }

  komponentDidMount () {
    console.log('Hello world')
  }

  present () {
    return (
        <DynamicTyping />
    )
  }
}

render(<App />, document.getElementById('app'))
