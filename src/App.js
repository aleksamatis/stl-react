import React from 'react';
import './App.css';
import User from './User';
import UserEdit from './UserEdit';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {updateUser, deleteUser, getUsers} from './data'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [], 
      sortDesc: true,
    }

    this.sortUsers = this.sortUsers.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    return getUsers().then(result => {
      this.setState({users: result})
    })
  }
  
  sortUsers(field) {
    return () => {
      const sorted = this.state.users.sort((a, b) => {
        if(a[field] < b[field]) { return this.state.sortDesc ? -1 : 1; }
        if(a[field] > b[field]) { return this.state.sortDesc ? 1 : -1; }
        return 0;
      })
      this.setState({users: sorted, sortDesc: !this.state.sortDesc, sortField: field})
    }
  }
  deleteUser(userId) {
      return deleteUser(userId).then(result => {
        this.setState({users: result})
      })
  }
  updateUser(user) {
    return updateUser(user).then(result => {
      this.setState({users: result})
    })
  }

  render() {
    return (
      <div className="App">
          <div className="app-main">
            <Router>
              <Switch>
                <Route path="/:userId" render={routeProps => {
                  const user = this.state.users.find( currentValue => currentValue.id === routeProps.match.params.userId )
                  if (user) {
                    return (
                      <div style={{display: 'flex'}}>
                        <Link to="/">Back</Link>
                        <UserEdit user={user} updateUser={this.updateUser} return={() => routeProps.history.push('/')}/>
                      </div>)
                  } else {
                    return <div>User not found</div>
                  }
                  
                }}/>
                <Route path="/">
                  {this.header()}
                  {this.state.users.map((user) => <User  key={user.id} user={user} deleteUser={this.deleteUser}/>)}
                </Route>
              </Switch>
            </Router>
          </div>
      </div>
    )
  }

  header() {
    return (
      <div className="main-row">
        {this.headerRow('row-cell-size-m', 'name')}
        {this.headerRow('row-cell-size-m', 'phone')}
        {this.headerRow('row-cell-size-m', 'eMail')}
        {this.headerRow('row-cell-size-m', 'country')}
        {this.headerRow('row-cell-size-sm', 'age')}
        <div className="header-cell row-cell row-cell-size-sm" />
      </div>
    )
  }

  headerRow(size, field) {
    if (this.state.sortField === field) {

    }
    return (
      <div
        className={'header-cell row-cell ' + size}
        onClick={this.sortUsers(field)}
      >
        {field} {this.headerArrow(field)}
      </div>
    )
  }

  headerArrow(field) {
    if (this.state.sortField === field) {
      return this.state.sortDesc ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />
    }
  }
}



export default App;
