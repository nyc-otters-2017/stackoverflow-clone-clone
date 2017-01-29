class AnswerIndex extends React.Component {
  constructor() {
    super()
    this.state = {answers: []}
  }

  componentDidMount() {
    $.ajax({
      url: '/questions/1/answers'
    }).done((response) => {
      console.log(response)
      this.setState({answers: response})
    })
  }

  render(){
    return(
      <div>
        <h2>Answers</h2>
          {
            this.state.answers.map((answer, i) => {
              return <p><a href={`/questions/1/answers/${answer.id}`}>{answer.body}</a></p>
            })
          }
      </div>

    )
  }
}
