import React from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';

    function RenderDish({dish}) {

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
    function RenderComments({comments}) {
        if (comments != null) {
            
                return (
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            {comments.map((comm) => {
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

    const  DishDetail = (props) => {
        if(props.dishes != null)
        return (
            <div class="container">
                <div className="row">
                    <RenderDish dish={props.dishes}/>
                    <RenderComments comments={props.dishes.comments}/>
                </div>
            </div>
        );
        else
        return(
            <div></div>
        );
    }

export default DishDetail;