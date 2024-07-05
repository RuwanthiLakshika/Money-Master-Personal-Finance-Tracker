import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
  } from "@clerk/clerk-react";
  import { Navigate } from "react-router-dom";
  import financeImage from "../../assets/finance.jpg";
  
  export const Auth = () => {
    return (
      <>
      <h1>Welcome to Your Own Personal Finance Tracker!</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          height: '100vh',
          paddingTop:'0px'
        }}
      >
        <SignedOut>
          <img
            src={financeImage}
            alt="finance"
            style={{
              width: '800px',
              height: '450px',
              marginRight: '50px',
              marginLeft: '80px',
              marginTop: '0px',
              
            }}
          />
          <div>
          <p style={{ marginTop: '10px', textAlign: 'left', marginRight:'80px'}}>
          Money Master - Personal Finance Tracker empowers you to take control of your 
          financial journey. Whether you're saving for a major purchase, planning for retirement, 
          or simply looking to better manage your day-to-day expenses, our tool provides the tools and 
          insights you need to succeed. With Money Master, you can:
            </p>
            <ul style={{ textAlign: "left", marginTop: "20px" }}>
              <li>provide the details of your income and expenses as inputs. </li>
              <li>Visualize the monthly budgets according to your inputs.</li>
              <li>Facilitate to edit your income and expenses easily.</li>
              <li>Able to make your decisions according to your budget.</li>
            </ul>
           <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px', 
              marginTop: '80px',
            }}
          >
            
            <SignUpButton mode="modal" />
            <SignInButton mode="modal" />
          </div>
          </div>
        </SignedOut>
        <SignedIn>
          <Navigate to="/record" />
        </SignedIn>
      </div>
      </>
    );
  };