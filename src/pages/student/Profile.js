import React, { Component } from "react";
import fire from "../../auth/fbAuth";
import ProfileInput from "../../components/student/ProfileInput";
import ChangePasswordForm from "../../components/student/ChangePasswordForm";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      region: "",
      email: "",
      educationInstitute: "",
      startStudy: "",
    };
  }

  componentDidMount() {
    const ref = fire
      .firestore()
      .collection("users")
      .doc("0NpMc79cflONyWSH2ljOE9myfCz1");
    ref.get().then((doc) => {
      if (doc.exists) {
        const user = doc.data();
        this.setState({
          firstName: user.firstName,
          lastName: user.lastName,
          region: user.region,
          email: user.email,
          educationInstitute: user.educationInstitute,
          startStudy: user.startStudy,
        });
        // console.log(user.firstName);
      } else {
        console.log("No such document!");
        alert("No document found");
      }
    });
  }

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ user: state });
  };

  updateProfile = (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      region,
      educationInstitute,
      startStudy,
    } = this.state;

    const updateRef = fire
      .firestore()
      .collection("users")
      .doc("0NpMc79cflONyWSH2ljOE9myfCz1");
    updateRef
      .update({
        firstName,
        lastName,
        region,
        educationInstitute,
        startStudy,
      })
      .then((docRef) => {
        this.setState({
          firstName: "",
          lastName: "",
          region: "",
          educationInstitute: "",
          startStudy: "",
        });
        console.log("success update");
        window.location.reload();
        alert("Profile updated!");
        // this.props.history.push("/show/" + this.props.match.params.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    return (
      <>
        <div className="flex justify-items-start">
          <div
            className="w-full p-5 mt-6 lg:mt-0 text-gray-900 leading-normal rounded-md"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {/* <div className="block">
              <div className="h-20 w-32 bg-gray-200 mr-5"></div>
              <div className="w-3/4 py-3 font-bold text-white flex justify-center h-30 bg-blue-500 rounded-lg">
                  <p className="text-lg">ROHAIZAD</p>
              </div>
              <div className="w-3/4">
                  logo utm
              </div>
            </div> */}

            <p className="text-xl">My Profile</p>
            <hr className="my-5" />

            <div>
              <form autoComplete="off" onSubmit={this.updateProfile}>
                <ProfileInput
                  inputType="text"
                  value={this.state.firstName}
                  onChange={this.onChange}
                  inputName="firstName"
                  id="firstName"
                  label="First name"
                  placeholder="Rohaizad"
                />
                <ProfileInput
                  inputType="text"
                  value={this.state.lastName}
                  onChange={this.onChange}
                  inputName="lastName"
                  id="lastName"
                  label="Last name"
                  placeholder="Maznan"
                />
                <ProfileInput
                  inputType="text"
                  value={this.state.region}
                  onChange={this.onChange}
                  inputName="region"
                  id="region"
                  label="Region"
                  placeholder="Malaysia"
                />
                <ProfileInput
                  inputType="text"
                  value={this.state.email}
                  onChange={this.onChange}
                  inputName="email"
                  id="email"
                  label="E-mail address (disabled)"
                  placeholder="rohaizadmaznan@gmail.com"
                  disable="true"
                />
                <ProfileInput
                  inputType="text"
                  value={this.state.educationInstitute}
                  onChange={this.onChange}
                  inputName="educationInstitute"
                  id="educationInstitute"
                  label="I study at"
                  placeholder="Universiti Teknologi Malaysia"
                />
                <ProfileInput
                  inputType="text"
                  value={this.state.startStudy}
                  onChange={this.onChange}
                  inputName="startStudy"
                  id="startStudy"
                  label="I started studying in"
                  placeholder="2021"
                />
                <div className="mb-2 flex justify-end">
                  <button
                    type="submit"
                    className="btn-sm text-white shadow-lg bg-blue-500 hover:bg-blue-600"
                  >
                    <span className="text-sm">Save</span>
                  </button>
                </div>
              </form>
            </div>

            <hr className="my-5 border-dashed opacity-75" />
            <p className="text-xl">Change Password</p>
            <hr className="my-5" />

            <div>
              <ChangePasswordForm />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
