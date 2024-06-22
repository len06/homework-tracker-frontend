
import React, { useEffect } from 'react';
import InputModal from './modal/InputModal'
import Card from './Card'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

function Main() {
    const [showModal, setShowModal] = React.useState(false);
    const [homeworkCards, setHomeworkCards] = React.useState([]);
    const navigate = useNavigate();

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
        if (err.response.data.includes('jwt')) {
          console.log(err);
          localStorage.removeItem('username');
          const cookies = Cookies();
          cookies.removeItem('token');
          navigate('/login');
          window.location.reload();
        }
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

    function removeCard(i){
      setHomeworkCards((prevCards) => [
        ...prevCards.slice(0, i),
        ...prevCards.slice(i + 1, prevCards.length)
      ])
    }

    return (<>
        {showModal ? <InputModal onClose={() => setShowModal(false)} addCard={addCard}/> : undefined}
        <div className="cards-container">
          {
            homeworkCards.map((card, i) => (
              <Card 
                key={i}
                subject_title={card.subject_title} 
                starting_date={card.starting_date} 
                deadline={card.deadline}
                removeCard={() => removeCard(i)}
              />
            )
          )
          }
          <button className="add-button" onClick={()=> {console.log("test"); setShowModal(true)}}>+</button>
        </div>
    </>);
}

export default Main;