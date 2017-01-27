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
        <p>
          {
            this.state.answers.map((answer, i) => {
              return (
                <dt>
                <dd><strong>Answer:</strong> {answer.body}</dd><br/>
                </dt>
              )

            })
          }
        </p>
      </div>

    )
  }
}
