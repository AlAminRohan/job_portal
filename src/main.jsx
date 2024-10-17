import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Profile from './components/Profile/Profile.jsx';
import Message from './components/Message/Message.jsx';
import Appoirment from './components/Appoirment/Appoirment.jsx';
import Notification from './components/Notification/Notification.jsx';
import BankAccout from './components/BankAccount/BankAccout.jsx';
import Security from './components/Security/Security.jsx';
import JobHistory from './components/JobHistory/JobHistory.jsx';
import Search from './components/Search/Search.jsx';
import Jobs from './components/Jobs/Jobs.jsx';
import Question from './components/Question/Question.jsx';
import TimeUpdate from './components/TimeUpdate/TimeUpdate.jsx';
import SubmitTime from './components/SubmitTime/SubmitTime.jsx';
import TimeSuccessfullySubmit from './components/TimeSuccessfullySubmit/TimeSuccessfullySubmit.jsx';
import Rating from './components/Rating/Rating.jsx';
import SuccessfullyApplied from './components/SuccessfullApplied/SuccessfullyApplied.jsx';
import JobOffer from './components/JobOffer/JobOffer.jsx';
import Accept from './components/Accept/Accept.jsx';
import AcceptMsg from './components/AcceptMsg/AcceptMsg.jsx';
import Reject from './components/Reject/Reject.jsx';
import RejectMsg from './components/RejectMsg/RejectMsg.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>
      },
      {
        path: "/message",
        element: <Message></Message>
      },
      {
        path: "/appoirment",
        element: <Appoirment></Appoirment>
      },
      {
        path: "/notification",
        element: <Notification></Notification>
      }
    ],
  },
  {
    path: "/bankAccount",
    element: <BankAccout></BankAccout>
  },
  {
    path: "/security",
    element: <Security></Security>
  },
  {
    path: "/jobHistory",
    element: <JobHistory></JobHistory>
  },
  {
    path: "/search",
    element: <Search></Search>
  },
  {
    path: "/jobs",
    element: <Jobs></Jobs>
  },
  {
    path: "/question",
    element: <Question></Question>
  },
  {
    path: "/timeUpdate",
    element: <TimeUpdate></TimeUpdate>
  },
  {
    path: "/submitTime",
    element: <SubmitTime></SubmitTime>
  },
  {
    path: "/successSubmit",
    element: <TimeSuccessfullySubmit></TimeSuccessfullySubmit>
  },
  {
    path: "/rating",
    element: <Rating></Rating>
  },
  {
    path: "/successfullyApplied",
    element: <SuccessfullyApplied></SuccessfullyApplied>
  },
  {
    path: "/JobOffer",
    element: <JobOffer></JobOffer>
  },
  {
    path: "/accept",
    element: <Accept></Accept>
  },
  {
    path: "/acceptMsg",
    element: <AcceptMsg></AcceptMsg>
  },
  {
    path: "/reject",
    element: <Reject></Reject>
  },
  {
    path: "/rejectMsg",
    element: <RejectMsg></RejectMsg>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
