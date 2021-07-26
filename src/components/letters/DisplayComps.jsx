import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function TextHeading(props) {
    return (
        <h1 className="text-heading">{props.heading}</h1>
    )
}

function Text(props) {
    return (
        <p className={`text ${props.className}`}>{props.text}</p>
    )
}

function Img(props) {
    return (
        <img className={`photo ${props.className}`} src={props.src} alt={props.alt} />
    )
}

function Mycard(props) {
    return (<Card className="card">
        <CardContent className="card-content">
            <Typography>
                {props.cardContent}
            </Typography>
        </CardContent>
    </Card>)
}

export { TextHeading, Text, Img, Mycard };