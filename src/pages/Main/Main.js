
import React, { useEffect } from 'react';
import InputModal from './modal/InputModal'
import Card from './Card'
import axios from 'axios';

function Main() {
    const [showModal, setShowModal] = React.useState(false);
    const [homeworkCards, setHomeworkCards] = React.useState([]);

    useEffect(() => {
      axios.get('/api/board').then((res) => {
        const data = res.data;

        setHomeworkCards(data.map(board => ({
          id: board.ID,
          subject_title: board.Name,
          starting_date: new Date().toISOString().slice(0, 10),
          deadline: 'daily'
        })))
        
      }).catch((err) => {
        console.error(err);
      })
    },[])
    
    function addCard(subject_title,starting_date,deadline){
        setHomeworkCards((prevCards) => {
        return [
        ...prevCards,
        {
            id: prevCards.length + 1,
            subject_title: subject_title,
            starting_date: starting_date,
            deadline: deadline
        }
        ]})
    }

    function removeCard(id){
      setHomeworkCards((prevCards) => {
        return prevCards.filter((card) => id !== card.id);
      })
    }

    return (<>
        <div className="cards-container">
          {
            homeworkCards.map((card) => (
              <Card 
                key={card.id}
                subject_title={card.subject_title} 
                starting_date={card.starting_date} 
                deadline={card.deadline}
                removeCard={removeCard}
              />
            )
          )
          }
          <button className="add-button" onClick={()=> setShowModal(true)}>+</button>
        </div>
        {showModal ? <InputModal onClose={() => setShowModal(false)} addCard={addCard}/> : undefined}
    </>);
}

export default Main;