import { useState } from 'react';
import './App.css';
import User from './user';
import UserEdit from './userEdit';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const users = [
  {id: '1', name: 'Roman', phone: '	+4312312312', eMail: 'sasdfasdfasdfasdfasd@gmail.com', country: 'AM', age: '20'},
  {id: '2', name: 'Ivan', phone: '+376222222222', eMail: 'sfasdfasdfa@gmail.list.com', country: 'BY', age: '30'},
  {id: '3', name: 'Alexander', phone: '+97355555555', eMail: 'aaaaaaaaaa@gmail.list.eu', country: 'DK', age: '25'},
  {id: '4', name: 'Masha', phone: '+1888888888', eMail: 's@gmail.list.ru', country: 'US', age: '20'},
  {id: '5', name: 'Grisha', phone: '+3390909090',  eMail: 'ssdsds@gmail.ru', country: 'AU', age: '30'},
  {id: '6', name: 'Pety', phone: '+377000000000', eMail: 'sjjjj@gmail.io', country: 'NL', age: '25'},
]

function App() {
  const [state, setState] = useState({
    users, 
    sortDesc: true,
  })
  
  function sortUsers(field) {
    return () => {
      const sorted = state.users.sort(function(a, b){
        if(a[field] < b[field]) { return state.sortDesc ? -1 : 1; }
        if(a[field] > b[field]) { return state.sortDesc ? 1 : -1; }
        return 0;
      })
      setState({users: sorted, sortDesc: !state.sortDesc, sortField: field})
    }
  }
  function deleteUser(userId) {
      const userIdx = state.users.findIndex( currentValue => currentValue.id === userId ); 
      state.users.splice(userIdx, 1);
      setState({users: state.users})
  }
  function updateUser(user) {
    const userIdx = state.users.findIndex( currentValue => currentValue.id === user.id );
    state.users[userIdx] = user
    setState({
      users: state.users
    })
  }
  return (
    <div className="App">
        <div className="app-main">
          <Router>
            <Switch>
              <Route path="/:userId" render={routeProps => {
                const user = state.users.find( currentValue => currentValue.id === routeProps.match.params.userId )
                return <div><UserEdit user={user} updateUser={updateUser} /><Link to="/">Back</Link></div>
              }}/>
              <Route path="/">
                <div className="main-row">
                  <div className="row-cell row-cell-size-m" onClick={sortUsers('name')}>Name { state.sortField === 'name' ? <ArrowDropUpIcon /> : ''}</div>
                  <div className="row-cell row-cell-size-m" onClick={sortUsers('phone')}>Phone { state.sortField === 'phone' ? <ArrowDropUpIcon /> : ''}</div>
                  <div className="row-cell row-cell-size-m" onClick={sortUsers('eMail')}>email { state.sortField === 'eMail' ? <ArrowDropUpIcon /> : ''}</div>
                  <div className="row-cell row-cell-size-m" onClick={sortUsers('country')}>country { state.sortField === 'country' ? <ArrowDropUpIcon /> : ''}</div>
                  <div className="row-cell row-cell-size-sm" onClick={sortUsers('age')}>age { state.sortField === 'age' ? <ArrowDropUpIcon /> : ''}</div>
                  <div className="row-cell row-cell-size-sm" />
                </div>
                {state.users.map((user) => <User  key={user.id} user={user} deleteUser={deleteUser}/>)}
              </Route>
            </Switch>
          </Router>
        </div>
    </div>
  );
}



export default App;
