import {Komponent, fu} from 'kofujs'
import {styles} from './styles.js'
import {data} from './data.js'

export default class DynamicTyping extends Komponent {
  constructor(props){
    super(props)
    this.data = {
      wordBank: data
    }
    this.state = {
      words: 'click start to get text and play',
      score: 0,
      started: false,
      startTime: 0,
      text: ''
    }
    this.classNames = this.setStyles(styles).classes
    this.handleChange = this.handleChange.bind(this)
    this.handleStartGame = this.handleStartGame.bind(this)
    this.handleCheckScore = this.handleCheckScore.bind(this)
  }
  handleChange(event){
    this.setState({[event.currentTarget.id]: event.currentTarget.value})
  }
  handleStartGame(){
    const date = new Date()
    const startTime = date.getTime();
    this.setState({started: true, startTime, words: this.data.wordBank[Math.floor(Math.random() * data.length)], text: ''})
  }
  handleCheckScore(){
    const date = new Date()
    const endTime = date.getTime();
    const rawScore = (endTime - this.state.startTime)/1000
    const textLength = this.state.text.split(' ').length
    const minuteRatio = 60/rawScore
    const challengeLength = this.state.words.split(' ').length
    const wordsPerMinute = textLength * minuteRatio
    const delimmiter = /\s*/
    const accuracy = this.state.words.split(delimmiter).reduce(
      (value,word,index)=> {
      if (word === this.state.text.split(delimmiter)[index]){
        return value
      } else { return value - 1}
    },challengeLength)

    console.log(accuracy)
    this.setState({started: false, score: `Your Typed ${Math.round(wordsPerMinute)} word per minute with ${accuracy}/${challengeLength} accuracy, press Start to play again`})
  }

  present (){
    return (
      <div className={this.classNames.container}>
        <h1>Type These Words As Fast as You Can </h1>
        <h3 className={this.classNames.words}>{this.state.words}</h3>
        <h2> This is your typing speed</h2>
        <h3 className={this.classNames.score}>{this.state.score}</h3>
        <h2> Type Here</h2>
        <textarea className={ this.classNames.textarea} id="text" onChange={this.handleChange} value={this.state.text} disabled={!this.state.started} cols="75" rows="15"></textarea>
        {
          this.state.started
          ?<button onClick={this.handleCheckScore} className={this.classNames.button} type="button">Done</button>
          :<button onClick={this.handleStartGame} className={this.classNames.button} type="button">Start</button>
        }
      </div>
    )
  }
}
