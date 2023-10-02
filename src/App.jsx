import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ContactForm from './pages/ContactForm';
import ContactStories from './pages/ContactStories';


const App =()=> {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}  ></Route>
      <Route path='/ContactForm' element={<ContactForm/>}></Route>
      <Route path='/ContactStories' element={<ContactStories/>}></Route>
    </Routes>
    </BrowserRouter>
    
  
   </div>


  );
}

export default App;
