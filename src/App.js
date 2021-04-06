import React, { useState } from 'react'
import './App.css';
import Icons from './Icons'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const itemsBox = new Array(9).fill("empty")

function App() {
  const [isCross, setIsCross] = useState(true)
  const [winMessage, setWinMessage] = useState("")


  const CheckisWinner = () => {
    if (itemsBox[0] !== 'empty' && itemsBox[0] === itemsBox[1] && itemsBox[0] === itemsBox[2]) {
      setWinMessage(`${itemsBox[0]} won`)
    }
    if (itemsBox[3] !== 'empty' && itemsBox[3] === itemsBox[4] && itemsBox[3] === itemsBox[5]) {
      setWinMessage(`${itemsBox[3]} won`)
    }
    if (itemsBox[6] !== 'empty' && itemsBox[6] === itemsBox[7] && itemsBox[6] === itemsBox[8]) {
      setWinMessage(`${itemsBox[6]} won`)
    }
    if (itemsBox[0] !== 'empty' && itemsBox[0] === itemsBox[3] && itemsBox[0] === itemsBox[6]) {
      setWinMessage(`${itemsBox[0]} won`)
    }
    if (itemsBox[1] !== 'empty' && itemsBox[1] === itemsBox[4] && itemsBox[1] === itemsBox[7]) {
      setWinMessage(`${itemsBox[1]} won`)
    }
    if (itemsBox[2] !== 'empty' && itemsBox[2] === itemsBox[5] && itemsBox[2] === itemsBox[8]) {
      setWinMessage(`${itemsBox[2]} won`)
    }
    if (itemsBox[0] !== 'empty' && itemsBox[0] === itemsBox[4] && itemsBox[0] === itemsBox[8]) {
      setWinMessage(`${itemsBox[0]} won`)
    }
    if (itemsBox[2] !== 'empty' && itemsBox[2] === itemsBox[4] && itemsBox[2] === itemsBox[6]) {
      setWinMessage(`${itemsBox[2]} won`)
    }
  }


  const reload = () => {
    setWinMessage("")
    itemsBox.fill("empty", 0, 9)
    setIsCross(true)
  }


  const writeItem = pos => {
    if (winMessage) {
      return toast(winMessage, { type: "success" })
    }

    if (itemsBox[pos] === "empty") {
      itemsBox[pos] = isCross ? 'cross' : 'circle'
      setIsCross(!isCross)
    }
    else {
      return toast("already filled", { type: "error" })
    }
    CheckisWinner()
  }





  return (
    <div className="App">
      <h1 className="animate__animated animate__fadeIn heading text-center mt-4 text-light text-uppercase heading">Tic Tac Toe</h1>

      <div className="container">

        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />



        {(winMessage) ?
          <div className="text-center mt-4">
            <h1 className="text-success my-3 text-uppercase">{winMessage}</h1>
            <button className="btn btn-primary btn-lg" onClick={reload}>RELOAD</button>
          </div>
          :
          <h1 className="text-primary text-center text-uppercase turn">{isCross ? 'Cross turn' : 'Circle Turn'}</h1>
        }




        <div className="row">
          <div className="col-md-6 offset-md-3 mt-5">
            <div className="row">

              {itemsBox.map((item, index) => (
                <div key={index} className="col-4 animate__animated animate__bounceIn icons" onClick={() => writeItem(index)}>
                  <Icons name={item} />
                </div>
              ))
              }

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
