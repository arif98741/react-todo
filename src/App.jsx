import Todo from "./components/Todo.jsx";
import { Header } from "./components/Header.jsx";
import './App.css'
import { Footer } from "./components/Footer.jsx";


function App() {
    return (
        <div className='App'>
            <Header />
            <Todo />
            {/* <Footer /> */}
        </div>
    )
}

//https://www.youtube.com/watch?v=MKAewt3Re2g&list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza&index=39
export default App
