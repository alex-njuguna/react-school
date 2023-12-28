import { useState } from 'react'
import questionAnswers from './mock_data'

const Accordion = () => {

    const QA = questionAnswers()

    const [data, setData] = useState([...QA])
    const [openID, setOpenID] = useState(null)

    const displayAnswer = (id) => {
        setOpenID(openID === id ? null : id)
    }

    return (
        <>
            {
                data.map((dt) => (
                    <div key={Math.random()}>
                        <h4>{dt.question}</h4>
                        <button onClick={() => displayAnswer(dt.id)}>+</button>
                        {openID === dt.id ? <p>{dt.answer}</p>: null}
                    </div>
                ))
            }
        </>
    )
}

export default Accordion