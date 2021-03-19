import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Media
} from 'reactstrap';
import DishDetail from './DishdetailComponent.js';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                        onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>

            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                <DishDetail dishes={this.state.selectedDish} />
                    </div>

            </div>
        );
    }
}

export default Menu;