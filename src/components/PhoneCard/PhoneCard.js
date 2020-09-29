import React from "react";
import {Image, Card, Icon} from "semantic-ui-react";



const PhoneCardComponent = ({brand, model, image, price}) =>{
    return(
        <Card>
            <Image src={image} />
            <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                    <span className='date'>{brand}</span>
                </Card.Meta>
                <Card.Description>
                    {model}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='hryvnia' />
                    {price}
                </a>
            </Card.Content>
        </Card>
    )
}
export default PhoneCardComponent