import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    first: '',
    second: '',
    empty1: false,
    empty2: false,
    next: false,
  }

  onSubmit = event => {
    event.preventDefault()
    const {first, second} = this.state
    if (first === '' && second === '') {
      this.setState({empty1: true, empty2: true})
    } else if (first === '') {
      this.setState({empty1: true})
    } else if (second === '') {
      this.setState({empty2: true})
    } else {
      this.setState({next: true, first: '', second: ''})
    }
  }

  onTap = () => {
    this.setState({next: false})
  }

  onBlur1 = event => {
    const v = event.target.value

    if (v === '') {
      this.setState({empty1: true})
    } else {
      this.setState({empty1: false})
    }
  }

  onBlur2 = event => {
    const v = event.target.value

    if (v === '') {
      this.setState({empty2: true})
    } else {
      this.setState({empty2: false})
    }
  }

  onFirst = event => {
    this.setState({first: event.target.value})
  }

  onSecond = event => {
    this.setState({second: event.target.value})
  }

  render() {
    const {first, second, empty1, empty2, next} = this.state

    const c = empty1 ? 'error' : ''
    const d = empty2 ? 'error' : ''

    return (
      <div>
        {next ? (
          <div className="back">
            <h1 className="h2">Registration</h1>
            <div className="back2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="img"
              />
              <p className="par">Submitted Successfully</p>

              <button type="button" className="button" onClick={this.onTap}>
                Submit Another Response
              </button>
            </div>
          </div>
        ) : (
          <div className="bg">
            <h1 className="h1">Registration</h1>
            <div className="bg1">
              <form onSubmit={this.onSubmit}>
                <div className="label">
                  <label htmlFor="first" className="lab">
                    FIRST NAME
                  </label>
                  <input
                    id="first"
                    className={`input ${c}`}
                    value={first}
                    onChange={this.onFirst}
                    placeholder="First name"
                    onBlur={this.onBlur1}
                  />
                  {empty1 && <p className="req">Required</p>}
                </div>

                <div className="label">
                  <label htmlFor="second" className="lab">
                    LAST NAME
                  </label>
                  <input
                    id="second"
                    className={`input ${d}`}
                    value={second}
                    onChange={this.onSecond}
                    placeholder="Last name"
                    onBlur={this.onBlur2}
                  />
                  {empty2 && <p className="req">Required</p>}
                </div>

                <div className="btnBg">
                  <button type="submit" className="btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
