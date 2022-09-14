import React from "react";
import './PokemonCard.css'
import {Modal} from 'react-bootstrap';
import {useState} from 'react';




const PokemonCard = ({ name, image, species, attack, degense, type }) => {

  const [show, setShow] = useState(false)
  return (
    <div>
      <div className="card">
        <h1>{name}</h1>
        <img src={image} alt={name} width="100px" className="images" />
        <button className="btn" onClick={() => setShow(true)}>view more</button>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassname="modal-50px"
        aria-labelledby="pokemon-name"
        className='window'
      >
        <Modal.Header closeButton>
          <Modal.Title id="pokemon-name"><h1 className="font">{name}</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='details'>
            <div className='outlook'>
              {image ?
                <img src={image} className="images" alt={name}  />
                : <span>Loading Image...</span>
              }
            </div>
            <div className='infos'>
                    <p>Species: {species}</p>
                    <h3>Attack: {attack}</h3>
                    <h4>Degense: {degense}</h4>
                    <p>Type: {type}</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>

    </div>

  );
};






export default PokemonCard;
