import React, {Component} from 'react';
import './App.css';
import * as axios from "axios/index"
import {setPhone} from "./redux/phoneReducer";
import {connect} from "react-redux";
import Menu from "./components/Menu/Menu";
import PhoneCard from "./components/PhoneCard/PhoneCard";
import {Container, Card} from "semantic-ui-react";



class App extends Component {
    componentWillMount() {
        const {setPhone} = this.props;
        axios.get('http://localhost:3000/phone.json').then(response => {
            console.log(response.data.items)
            setPhone(response.data.items)
        });
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.props.phones !== nextProps.phones) {
            return true
        }else if(this.props.state !== nextState){
            return true
        }
    }

    render() {
        const {phones, /*isReady*/} = this.props

        return (
            <Container>
                    <Menu/>
                <Card.Group itemsPerRow={4}>
                    {/*!isReady
                        ? 'Загрузка...'
                        :*/
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
const mapStateToProps = (phones) => ({
    phones: phones.items,

});
const mapDispatchToProps = (dispatch) => ({
    setPhone: phones => dispatch(setPhone(phones))

})
export default connect(mapStateToProps, mapDispatchToProps)(App);
