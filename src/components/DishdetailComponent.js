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

    renderDish(dish) {

        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );

    }
    renderComments(dish) {
        if (dish != null) {
            
                return (
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            {dish.map((comm) => {
                                return (
                                    <li key={comm.id} >
                                            <p>{comm.comment}</p>
                                            <p>--{comm.author},
                            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comm.date)))}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );

        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        if(this.props.dishes != null)
        return (
            <div class="container">
                <div className="row">
                    {this.renderDish(this.props.dishes)}
                    {this.renderComments(this.props.dishes.comments)}
                </div>
            </div>
        );
        else
        return(
            <div></div>
        );
    }
}

export default DishDetail;