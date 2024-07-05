import './App.css';
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import { Dashboard } from './pages/dashboard';
import { Auth } from './pages/auth';
import { FinancialRecordsProvider } from './contexts/financial-record-context';
import { SignedIn, UserButton } from "@clerk/clerk-react";

function App() {

  return (
    <Router>
     <div className='app-container'>
     <div className="navbar">
          <Link to="/record"> Dashboard</Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      <Routes>
      <Route path='/' element={<Auth/>} />
        <Route path='/record' 
        element={
          <FinancialRecordsProvider>
          <Dashboard/>
          </FinancialRecordsProvider>
        } 
        />
       
        </Routes>
     </div>
     </Router>
  )
}

export default App
