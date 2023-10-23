import { RecursiveOne } from "./Components/Recursive01";
import Datamuse from './Components/Datamuse.js'
import ManualMultiselect from './Components/ManualMultiselect'
import MatchGame from './Components/MatchGame'
import Sudoku from './Components/Sudoku'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DataSlider from "./Components/DataSlider/DataSlider";
import QuizQuestions from "./Components/QuestionsQuiz/QuizQuestions";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<RecursiveOne />}></Route>
        <Route exact path='/Datamuse' element={<Datamuse />}></Route>
        <Route exact path='/ManualMultiselect' element={<ManualMultiselect />}></Route>
        <Route exact path='/MatchGame' element={<MatchGame />}></Route>
        <Route exact path='/Sudoku' element={<Sudoku />}></Route>
        <Route exact path='/DataSlider' element={<DataSlider />}></Route>
        <Route exact path='/QuizQuestions' element={<QuizQuestions />}></Route>
      </Routes>
    </Router>
  )

}

export default App;
