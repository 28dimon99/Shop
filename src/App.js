import React, {Component} from 'react';
import './App.css';
import * as axios from "axios/index"
import {setPhone} from "./redux/phoneReducer";
import {connect} from "react-redux";

class App extends Component {

    componentWillMount() {
        const { setPhone } = this.props;
        axios.get('/phone.json').then(({data}) => {
            setPhone(data)
        });
    }
    render() {
        const {phones} = this.props
        return (
                <ul>
                    {phones && phones.map(p => (
                        <li>
                            <b>{p.brand}</b> - {p.model}
                        </li>
                    ))}
                </ul>
        );
    }
}
const mapStateToProps = (state) => ({
    phones: state.items
});
const mapDispatchToProps = (dispatch) => ({
    setPhone: phones => dispatch(setPhone(phones))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
