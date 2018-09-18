import React from 'react';
const SeriesLitItem = (props) => {
    return (
        <li >{props.slistItem}</li>
    );
};

const SeriesList = (props) => {
 return(
 <div> 
     <ul>
         {props.list.map(slist => (
            <SeriesLitItem slistItem={slist} key = {slist}/>
         ))}
     </ul>
 </div>
 );
}

export default SeriesList;