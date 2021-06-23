import './App.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class userEdit extends React.Component {
  constructor(props) {
    super(props)
    
    this.updateUser = this.updateUser.bind(this)
    this.changedName = this.changedName.bind(this)
    this.changedPhone = this.changedPhone.bind(this)
    this.changedEmail = this.changedEmail.bind(this)
    this.changedAge = this.changedAge.bind(this)
    this.changedCountry = this.changedCountry.bind(this)

    this.state = {
        name: props.user.name,
        phone: props.user.phone,
        eMail: props.user.eMail,
        age: props.user.age,
        country: props.user.country,
    }
  }

  updateUser() {
    this.props.updateUser({
      id: this.props.user.id,
      name: this.state.name,
      phone: this.state.phone,
      age: this.state.age,
      eMail: this.state.eMail,
      country: this.state.country,
    }).then(() => {
      this.props.return()
    })
  }

  changedName(event) {
    this.setState({
      name: event.target.value,
    })
  }

  changedPhone(event) {
    this.setState({
      phone: event.target.value,
    })
  }
  
  changedEmail(event) {
    this.setState({
      eMail: event.target.value,
    })
  }

  changedAge(event) {
    this.setState({
      age: event.target.value,
    })
  }

  changedCountry(event) {
    this.setState({
      country: event.target.value,
    })
  }

  render() {
    return (
      <div style={{width: '400px', margin: '0 auto'}}>
        <form noValidate autoComplete="off">
          <div className="main-user-edit">
            <TextField className="text-field-class" label="Name" value={this.state.name} onChange={this.changedName}/>
            <TextField className="text-field-class" label="Phone" value={this.state.phone} onChange={this.changedPhone} />
            <TextField className="text-field-class" label="Email" value={this.state.eMail} onChange={this.changedEmail}/>
            <Select
              value={this.state.country}
              onChange={this.changedCountry}
            >
              <MenuItem value='AU'>Australia</MenuItem>
              <MenuItem value='RU'>Russia</MenuItem>
              <MenuItem value='US'>USA</MenuItem>
            </Select>
            <TextField className="text-field-class" type="number" label="Age" value={this.state.age} onChange={this.changedAge}/>
            <Button variant="contained" onClick={this.updateUser}>Update</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default userEdit;