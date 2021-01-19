import React from 'react';


// const Cardlist = (props) => (
//     <div>
//         <Card />
//         <Card />
//     </div>
// )

class Card extends React.Component {
    render() {
        return (
            <div className="github-profile">
                <img src='https://placehold.it/75' />
                <div className="info">
                    <div className="Name">Name Here...</div>
                    <div className="company">Company Name</div>
                </div>
            </div>
        )
    }
}

export default Card;




