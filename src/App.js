import React, {Component} from 'react';
import './App.css';
import * as axios from "axios/index"

import {connect} from "react-redux";
import Menu from "./components/Menu/Menu";
import PhoneCard from "./components/PhoneCard/PhoneCard";
import {Container, Card} from "semantic-ui-react";
import {setPhone} from "./redux/phoneReducer";



class App extends Component {
    componentDidMount() {
        const {setPhone} = this.props;
        axios.get('/phone.json').then(response => {
            debugger
            setPhone(response.data)
        });
    }

  /*  shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.props.phones !== nextProps.phones) {
            return true
        }
        else if(this.props.state !== nextState.state){
            return true
        }
    }*/

    render() {
        const {phones, isReady} = this.props

        return (
            <Container>
                    <Menu/>
                <Card.Group itemsPerRow={4}>
                    {!isReady
                        ? 'Загрузка...'
                        :
                        phones && phones.map(p => (
                        /*<PhoneCard {...p}/>*/
                        <li>
                            <b>{p.brand}</b> - {p.model}
                        </li>
                    ))}
                </Card.Group>
            </Container>
        );
    }
}
const mapStateToProps = (state) => ({
    phones: state.phones,


});
const mapDispatchToProps = (dispatch) => ({
    setPhone: phones => dispatch(setPhone(phones)),


})
export default connect(mapStateToProps, mapDispatchToProps)(App);
