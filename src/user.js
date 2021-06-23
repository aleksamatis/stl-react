import './App.css';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from "react-router-dom";

class User extends React.Component {
    constructor(props) {
        super(props)
        this.deleteUser = this.deleteUser.bind(this)
    }
    deleteUser() {
        this.props.deleteUser(this.props.user.id)
    }
    render() {
        return (
            <div>
                <div className="main-row">
                    <div className="row-cell row-cell-size-m">{this.props.user.name}</div>
                    <div className="row-cell row-cell-size-m">{this.props.user.phone}</div>
                    <div className="row-cell row-cell-size-m">{this.props.user.eMail}</div>
                    <div className="row-cell row-cell-size-m">{this.props.user.country}</div>
                    <div className="row-cell row-cell-size-sm">{this.props.user.age}</div>
                    <div className="row-cell row-cell-size-sm">
                        <IconButton color="secondary" onClick={this.deleteUser}><DeleteIcon /></IconButton>
                        <Link to={'/' + this.props.user.id}><EditIcon /></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default User