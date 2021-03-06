import React, { Component } from 'react'
import LoginForm from '../../components/login/Form'
import LoginHeader from '../../components/login/Header'
import { Button } from 'antd'
class Login extends Component {
  state = {
    tags: [1, 2]
  }
  constructor() {
    super()
  }
  addTag = () => {
    let { tags } = this.state
    let tag = tags[tags.length - 1] + 1
    tags.push(tag)
    this.setState({ tags })
  }
  deleteTag = i => {
    let { tags } = this.state
    console.log(i)

    tags.splice(i, 1)
    console.log(tags)

    this.setState({ tags })
  }
  renderTags() {
    if (this.state.tags.length) {
      return (
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>
              {tag}
              <Button
                type="primary"
                danger
                size="small"
                onClick={tag => this.deleteTag(tag)}
              >
                删除
              </Button>
            </li>
          ))}
        </ul>
      )
    } else {
      return 'there are not tags'
    }
  }
  render() {
    return (
      <>
        <LoginHeader></LoginHeader>
        <LoginForm></LoginForm>
        <Button onClick={this.addTag}>add tag</Button>
        <div>{this.renderTags()}</div>
      </>
    )
  }
}

export default Login
