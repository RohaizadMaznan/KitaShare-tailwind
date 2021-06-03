import React from "react";
import UploadFormSubmit from '../../components/student/UploadForm';
import { createWorker } from "tesseract.js";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import "filepond/dist/filepond.min.css";
import Meta from "../../components/layout/meta/Meta";
// import { AuthContext } from "../../auth/Auth";

registerPlugin(FilePondPluginImagePreview);

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isProcessing: false,
      ocrText: "",
      pctg: "0.00",
    };
    this.pond = React.createRef();
    this.worker = React.createRef();
    this.updateProgressAndLog = this.updateProgressAndLog.bind(this);
    // this.currentUser = React.createContext(AuthContext)
  }

  async doOCR(file) {
    this.setState({
      isProcessing: true,
      ocrText: "",
      pctg: "0.00",
    });
    // Loading tesseract.js functions
    await this.worker.load();
    // Loadingg language as 'English'
    await this.worker.loadLanguage("eng");
    await this.worker.initialize("eng");
    // Sending the File Object into the Recognize function to
    // parse the data
    const {
      data: { text },
    } = await this.worker.recognize(file.file);
    this.setState({
      isProcessing: false,
      ocrText: text,
    });
  }
  updateProgressAndLog(m) {
    // Maximum value out of which percentage needs to be
    // calculated. In our case it's 0 for 0 % and 1 for Max 100%
    // DECIMAL_COUNT specifies no of floating decimal points in our
    // Percentage
    var MAX_PARCENTAGE = 1;
    var DECIMAL_COUNT = 2;

    if (m.status === "recognizing text") {
      var pctg = (m.progress / MAX_PARCENTAGE) * 100;
      this.setState({
        pctg: pctg.toFixed(DECIMAL_COUNT),
      });
    }
  }
  componentDidMount() {
    // Logs the output object to Update Progress, which
    // checks for Tesseract JS status & Updates the progress
    this.worker = createWorker({
      logger: (m) => this.updateProgressAndLog(m),
    });
  }

  // const { currentUser } = useContext(AuthContext);

  // if(this.currentUser.) {
  //   return <Redirect to="/" />
  // }

  render() {
    return (
      <>
      <Meta title="Start Upload Handnotes | KitaShare Web Application and OCR" />
        <div
          className="w-full lg:max-h-screen p-5 mt-6 lg:mt-0 text-gray-900 leading-normal rounded-md"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="w-full p-5 shadow-lg space-y-2 bg-white text-center rounded-md">
            {/* <div><p>Upload image</p></div> */}
            <div className="w-full rounded-lg">
              <FilePond
                ref={(ref) => (this.pond = ref)}
                onaddfile={(err, file) => {
                  this.doOCR(file);
                }}
                onremovefile={(err, fiile) => {
                  this.setState({
                    ocrText: "",
                  });
                }}
              />
            </div>
            <div className="text-left mt-3 p-5 bg-gray-200 rounded-lg">
              <p>
                {/* <span
                  className={
                    "w-12 h-12 border-2 border-solid animate-spin  rounded-full border-blue-400" +
                    (this.state.isProcessing ? "animate-spin" : "")
                  }
                ></span>{" "} */}
                {this.state.isProcessing
                  ? `Processing Image ( ${this.state.pctg} % )`
                  : "Parsed Text"}{" "}
              </p>
            </div>
            <div className="text-left p-5 border rounded-lg border-gray-200">
              <p>
                {this.state.isProcessing
                  ? "Capturing the alphabets, working on it..."
                  : this.state.ocrText.length === 0
                  ? "No Valid Text Found / Upload Image to Parse Text From Image"
                  : this.state.ocrText}
              </p>
            </div>
          </div>
        </div>

        <UploadFormSubmit ocrText={this.state.ocrText} />
      </>
    );
  }
}

export default UploadForm;
