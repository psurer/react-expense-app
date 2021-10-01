import './Card.css';
// this will act as a shell for our expenses or expense item content
function Card(props) {
    //children is reserved name 
    return <div className="card">{props.children}</div>
}


export default Card;