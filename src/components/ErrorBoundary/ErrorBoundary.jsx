import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false,
      errorName: '',
      errorInfo: '',
    }
  }

  static getDerivedStateFromError() {
    this.setState({ error: true })
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      errorName: error,
      errorInfo: errorInfo,
    })
  }

  render() {
    if (this.state.error) {
      return (
        <>
          <h1>{this.state.errorName}</h1>
          <h1>{this.state.errorInfo}</h1>
        </>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
