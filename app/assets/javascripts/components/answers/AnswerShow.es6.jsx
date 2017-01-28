class AnswerShow extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    $.ajax({
      url: '/questions/1/answers/1'
    }).done((response) => {
      console.log(response)
      this.setState( response )
    })
  }

  render() {
    debugger
    let {body, created_at} = this.props.singleAnswer
    return(
      <div>
        <h1>hi</h1>
        <p>{body}</p>
        <p>{created_at}</p>
      </div>
    )
  }
}
