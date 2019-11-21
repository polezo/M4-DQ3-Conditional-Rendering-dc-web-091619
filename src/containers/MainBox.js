import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {currentPage:<Profile/>}

  toggleMenu = (e) => {
    let currentPage
    switch (e.target.id) {
      case "profile":
        currentPage = <Profile/>
        break;
      case "photo":
        currentPage = <Photos/>
        break;
      case "cocktail":
        currentPage = <Cocktails/>
        break;
      case "pokemon":
        currentPage = <Pokemon/>
        break;
        default:
        currentPage = <Profile/>
    }
    this.setState({currentPage})
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

   

    return (
      <div>
        <MenuBar toggleMenu={this.toggleMenu}/>
        {this.state.currentPage}
      </div>
    )
  }

}

export default MainBox
