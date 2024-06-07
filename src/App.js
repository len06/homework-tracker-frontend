import React from 'react'
import Header from './Header'
import InputModal from './modal/InputModal'
import Card from './Card'
import './App.css';

function App() {
  const [showModal, setShowModal] = React.useState(false);
  const [homeworkCards, setHomeworkCards] = React.useState([]);
  
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

  return(
    <>
      <Header className="app-header" />
      <main className="app-content">
        <div className="cards-container">
          {
            homeworkCards.map((card) => (
              <Card 
                key={card.id}
                subject_title={card.subject_title} 
                starting_date={card.starting_date} 
                deadline={card.deadline}
              />
            )
          )
          }
          <button className="add-button" onClick={()=> setShowModal(true)}>+</button>
        </div>
        <InputModal show={showModal} onClose={() => setShowModal(false)} addCard={addCard}/>
      </main>
    </>
  )
}

export default App;
