import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function GoToDocumentation() {
  window.open("/documentation/about", "_self");
  return <p>Go to documentation</p>;
}

function GoToUploadFile() {
  window.open("/student/upload-file", "_self");
  return <p>Go to upload file</p>;
}

function GoToSearch() {
  window.open("/search", "_self");
  return <p>Go to search page</p>;
}

function GoToSearchDoc() {
  window.open("/search?doc=json", "_self");
  return <p>Go to search page</p>;
}

function GoToSignin() {
  window.open("/signin", "_self");
  return <p>Go to signin</p>;
}

function Chatbot(props) {
  // const { search } = this.state;

  const config = {
    width: "400px",
    height: "600px",
    floating: true,
    headerTitle: "Kitsha Bot",
    botDelay: 2000,
    enableSmoothScroll: true,
    style: {
      color: "black",
    },
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
    userFontColor: "#4c4c4c",
  };

  const steps = [
    {
      id: "1",
      message: "Hi, I'm Kitsha! May I know your name?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Hi {previousValue}, may I know what bring you here?",
      trigger: "4",
    },
    {
      id: "4",
      options: [
        {
          value: "upload",
          label: "Upload File",
          trigger: "5",
        },
        {
          value: "find source",
          label: "Find source",
          trigger: "inputdoc",
        },
        {
          value: "see documentation",
          label: "See documentation",
          trigger: "11",
        },
        {
          value: "others",
          label: "Others",
          trigger: "othersOpt",
        },
      ],
    },
    {
      id: "othersOpt",
      message: "What can I help you?",
      trigger: "t1",
    },
    {
      id: "t1",
      options: [
        {
          value: "what is kitaShare?",
          label: "What is KitaShare?",
          trigger: "a1",
        },
        {
          value: "What is OCR?",
          label: "What is OCR?",
          trigger: "a2",
        },
        {
          value: "Why use OCR?",
          label: "Why use OCR?",
          trigger: "a3",
        },
      ],
    },
    {
      id: "a1",
      message: "KitaShare is a web application system which is able to contribute to students in their learning experiences to obtain with no limitation to get the learning materials for themselves while studying through Online Distance Learning (ODL).",
      trigger: "more",
    },
    {
      id: "a2",
      message: "Optical character recognition or optical character reader (OCR) is that the electronic or mechanical conversion of pictures of written, written or written text into machine-encoded text, whether or not from a scanned document, a photograph of a document, a scene-photo (e.g., text on signs and billboards during a landscape photo) or from subtitle text superimposed on a picture (e.g., from a tv broadcast).",
      trigger: "more",
    },
    {
      id: "a3",
      message: "Literally, OCR stands for Optical Character Recognition. It is a widespread technology to recognize text inside images, such as scanned documents and photos. OCR technology is used to convert virtually any kind of image containing written text (typed, handwritten, or printed) into machine-readable text data.<br />OCR Technology became popular in the early 1990s while attempting to digitize historic newspapers. Since then the technology has undergone several improvements. Nowadays solutions deliver near to perfect OCR accuracy. Advanced methods like Zonal OCR are used to automate complex document-based workflows.",
      trigger: "more",
    },
    {
      id: "more",
      message: "Do you want to end the chat?",
      trigger: "o1",
    },
    {
      id: "o1",
      options: [
        {
          value: "yes",
          label: "Yes",
          trigger: "Done",
        },
        {
          value: "no",
          label: "No",
          trigger: "4",
        },
      ],
    },
    {
      id: "5",
      message: "Have you log in?",
      trigger: "7",
    },
    {
      id: "7",
      options: [
        {
          value: "yes",
          label: "Yes",
          trigger: "9",
        },
        {
          value: "sign me in",
          label: "Sign me in",
          trigger: "8",
        },
      ],
    },
    {
      id: "9",
      component: <GoToUploadFile />,
      trigger: "10",
    },

    {
      id: "8",
      component: <GoToSignin />,
      trigger: "10",
    },

    {
      id: "10",
      message: "I will redirect you to the screen",
      trigger: "Done",
    },

    {
      id: "11",
      component: <GoToDocumentation />,
      trigger: "10",
    },

    {
      id: "12",
      component: <GoToSearch />,
      trigger: "10",
    },

    {
      id: "inputdoc",
      message: "What file or document do you want me to find?",
      trigger: "userinput",
    },
    {
      id: "userinput",
      user: true,
      trigger: "searchdoc",
    },
    {
      id: "searchdoc",
      component: <GoToSearchDoc />,
      end: true,
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
      end: true,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} {...config} />
    </ThemeProvider>
  );
}

export default Chatbot;
