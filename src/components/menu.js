import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router';
import '../css/menu.css';
import Loader from './loader-spinner'

export default class MenuExampleVerticalSecondary extends Component {
  state = { activeItem: this.props.active, loading: true }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  componentDidMount()
  {
    setTimeout(()=>this.setState({loading: false}))
  }

  render() {
    const { activeItem, loading} = this.state
    if (loading)
      return (<Loader type='block' />)
    return (
      <Menu pointing secondary vertical>
      <Menu.Item header>Меню</Menu.Item>
        <Menu.Item 
            as={Link} 
            to='/' 
            name='Главная' 
            active={activeItem === 'Главная'} 
            onClick={this.handleItemClick} />

        <Menu.Item 
          as={Link} 
          to='/graphics'
          name='Графики'
          active={activeItem === 'Графики'}
          onClick={this.handleItemClick} />
      </Menu>
    )
  }
}
