import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false,
      errorName: null,
    }
  }

  static getDerivedStateFromError() {
    return { error: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      errorName: error,
    })
  }

  render() {
    if (this.state.error) {
      return (
        <h1>
          {this.state.errorName &&
            this.state.errorName.toString()}
        </h1>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
