import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function GoToDocumentation(){
  window.open('/documentation', "_self");
  return <p>Go to documentation</p>
}

function GoToUploadFile(){
  window.open('/student/upload-file', "_self");
  return <p>Go to upload file</p>
}


function GoToSignin(){
  window.open('/signin', "_self");
  return <p>Go to signin</p>
}

function Chatbot(props) {
  const config = {
    width: "400px",
    height: "600px",
    floating: true,
    headerTitle: "Kitsha Bot",
    botDelay: 2000,
    enableSmoothScroll: true,
    style: {
        color: "black"
    }
  };

  const theme = {
    background: "white",
    fontFamily: "Rubik",
    color: "black",
    headerBgColor: "#0099ff",
    headerFontColor: "#fff",
    headerFontSize: "20px",
    botBubbleColor: "#0099ff",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4c4c4c"
  };

  const steps = [
    {
      id: "1",
      message: "Hi, I'm Kitsha! May I know your name?",
      trigger: "2"
    },
    {
      id: "2",
      user: true,
      trigger: "3"
    },
    {
      id: "3",
      message: "Hi {previousValue}, may I know what bring you here?",
      trigger: "4"
    },
    {
      id: "4",
      options: [
        {
            value: "upload",
            label: "Upload File",
            trigger: "5"
        },
        { 
            value: "find source", 
            label: "Find source", 
            trigger: "" 
        },
        { 
            value: "see documentation", 
            label: "See documentation", 
            trigger: "11" 
        }
      ]
    },
    {
      id: "5",
      message:
        "Have you log in?",
      trigger: "7"
    },
    {
      id: "7",
      options: [
        {
            value: "yes",
            label: "Yes",
            trigger: "9"
        },
        { 
            value: "sign me in", 
            label: "Sign me in", 
            trigger: "8" 
        }
      ]
    },
    {
      id: '9',
      component: (
        <GoToUploadFile />
      ),
      trigger: "10"
    },

    {
      id: '8',
      component: (
        <GoToSignin />
      ),
      trigger: "10"
    },
    
    {
      id: "10",
      message:
        "I will redirect you to the screen",
      trigger: "Done"
    },

    {
      id: '11',
      component: (
        <GoToDocumentation />
      ),
      trigger: "10"
    },


    // {
    //   id: "6",
    //   options: [
    //     { value: true, label: "Sign in", trigger: "Done" },
    //     { value: false, label: "Thanks!", trigger: "Done" }
    //   ]
    // },
    {
      id: "Done",
      message: "Have a great day!!",
      end: true
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} {...config} />
    </ThemeProvider>
  );
}

export default Chatbot;
