class AnswerShow extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    $.ajax({
      url: "/questions/1/answers/2"
    }).done((response) => {
      console.log(response)
      this.setState(response)
    }.bind(this))
  }

  render() {
    let {body, created_at} = this.state
    return(
      <div>
        <h1>Answer Data</h1>
        <p>{body}</p>
        <p>{created_at}</p>
        <p><a href={`/questions/1/answers/`}>Back</a></p>
      </div>
    )
  }
}
