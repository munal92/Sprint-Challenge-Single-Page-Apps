import React from "react";
import styled from "styled-components";
let colorStats = '#4963E8' ;

export default function CharacterCard(props) {
    const Card = styled.div`
      width: 80%;
      padding: 10px;
      margin:30px;
      border-style: double;
      border-width: 15px;
      border-color: yellow;
      background-color: aqua;
    `;
  
    const CardImg = styled.img`
      width: 180px;
      height: 180px;
      border-radius: 5px;
      box-shadow: 1px 1px 8px blue;
      margin:30px;
      
      
    `;
  
    const CardInfo = styled.div`
       width: 40%;
      text-align: left;
      margin:30px;
     
     `;
  
    if ((props.character.status) == 'Dead')  {
      colorStats ='#FE0101';
    } else if ((props.character.status) == 'Alive') {colorStats = '#49E888' ;}
    else colorStats = '#4963E8' ;
       
    const Status = styled.div`
    
     width:20%;
      background:${colorStats} ;
      height: 40px;
      vertical-align: middle;
      color: white;
      padding: 10px;
      margin:30px;
     `;

  
  return (
    <div className="character-card">
      <Card>
        <CardImg src={props.character.image} />
        <CardInfo>
          <div>Name: {props.character.name}</div>
          <div>Gender: {props.character.gender}</div>
          <div>Species: {props.character.species}</div>
          <div>Origin: {props.character.origin.name}</div>
        </CardInfo>
        <Status>{props.character.status}  </Status>
      </Card>
    </div>
  )
  
}

