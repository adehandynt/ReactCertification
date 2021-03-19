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

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <DishDetail dishes={this.state.selectedDish} />
            );
        } else {
            return (
                <div></div>
            );
        }
    }
    renderComments(dish) {
        if (dish != null) {
            const comments = dish.comments.map((comm) => {
                return (
                    <li key={comm.id} >
                        <div>
                            <p>{comm.comment}</p>
                            <p>--{comm.author},
                            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))}</p>
                        </div>
                    </li>
                );
            });
            return (
                <div><h4>Comments</h4>
                    {comments}</div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                        onClick={() => this.onDishSelect(dish)}>
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
                    {this.renderDish(this.state.selectedDish)}
                    <div className="col-12 col-md-5 m-1">
                        <ul className="list-unstyled">
                            {this.renderComments(this.state.selectedDish)}
                        </ul>
                    </div></div>

            </div>
        );
    }
}

export default Menu;