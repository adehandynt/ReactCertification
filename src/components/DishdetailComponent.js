import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
    }

    render() {
        console.log(this.props.dishes);
        const selectedDish = [this.props.dishes].map((dish) => {
            return (
                <Card key={dish.id}>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        });
        return (
            <div className="col-12 col-md-5 m-1">
                {selectedDish}
            </div>
        );
    }
}

export default DishDetail;