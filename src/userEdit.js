import './App.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class userEdit extends React.Component {
    constructor(props) {
        super(props)
        this.updateUser = this.updateUser.bind(this)
        this.changedName = this.changedName.bind(this)

        this.state = {
            name: props.user.name,
        }
    }
    updateUser() {
        this.props.updateUser({
            id: this.props.user.id,
            name: this.state.name
        })
    }
    changedName(event) {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        return (
            <div style={{width: '400px', margin: '0 auto'}}>
                <form noValidate autoComplete="off">
                    <div className="main-user-edit">
                        <TextField className="text-field-class" id="standard-basic" label="Name" value={this.state.name} onChange={this.changedName}/>
                        <TextField className="text-field-class" id="standard-basic" label="Phone" value={this.state.phone} onChange={this.changedPhone} />
                        <TextField className="text-field-class" id="standard-basic" label="Email" value={this.state.eMail} onChange={this.changedEmail}/>
                        <TextField className="text-field-class" id="standard-basic" label="Country" value={this.state.country} onChange={this.changedCountry}/>
                        <TextField className="text-field-class" id="standard-basic" label="Age" value={this.state.age} onChange={this.changedAge}/>
                        <Button variant="contained" onClick={this.updateUser}>Update</Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default userEdit