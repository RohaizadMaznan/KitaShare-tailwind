import React, { useState } from "react";
import fire from "../../auth/fbAuth";
import ProfileInput from "../../components/student/ProfileInput";
import { useToasts } from "react-toast-notifications";

export default function ChangePasswordForm() {
  const { addToast } = useToasts();
  const [currPass, setCurrPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

//   const reauthenticate = (currentPassword) => {
//     var user = fire.auth().currentUser;
//     var cred = fire.auth.EmailAuthProvider.credential(
//       user.email,
//       currentPassword
//     );
//     return user.reauthenticateWithCredential(cred);
//   };

  const handleNewPassword = (e, currentPassword) => {
    e.preventDefault();

    if (newPass !== confirmPass) {
      const message = "Password and password confirmation does not match";
      addToast(message, {
        appearance: "warning",
        autoDismiss: true,
      });
      return null;
    }

    const promises = [];
    if (confirmPass) {
      promises.push(fire.auth().currentUser.updatePassword(confirmPass));
    }

    Promise.all(promises)
      .then(() => {
        const message = "Password have been updated!";
        addToast(message, {
          appearance: "success",
          autoDismiss: true,
        });
        console.log("Successfully change new password!")
      })
      .catch((err) => {
        const message = err.message;
        addToast(message, { appearance: "error", autoDismiss: true });
      });
    // else {
    //   const message = "Password and password confirmation is match!";
    //   addToast(message, {
    //     appearance: "success",
    //     autoDismiss: true,
    //   });
    //   return null;
    // }
    // console.log(confirmPass);

    // reauthenticate(currentPassword)
    //   .then(() => {
    //     var user = fire.auth().currentUser;
    //     user
    //       .updatePassword(confirmPass)
    //       .then(() => {
    //         console.log("Password updated!");
    //       })
    //       .catch((err) => {
    //         const message = err.message;
    //         addToast(message, { appearance: "error", autoDismiss: true });
    //       });
    //   })
    //   .catch((err) => {
    //     const message = err.message;
    //     addToast(message, { appearance: "error", autoDismiss: true });
    //   });
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleNewPassword}>
        <ProfileInput
          inputType="password"
          value={currPass}
          aria-describedby="curPass-helper-text"
          onChange={({ target }) => setCurrPass(target.value)}
          inputName="currPass"
          id="currPass"
          label="Current password"
          placeholder="Current password"
        />
        <ProfileInput
          inputType="password"
          value={newPass}
          aria-describedby="newPass-helper-text"
          onChange={({ target }) => setNewPass(target.value)}
          inputName="newPass"
          id="newPass"
          label="New password"
          placeholder="New password"
        />
        <ProfileInput
          inputType="password"
          value={confirmPass}
          aria-describedby="confirmPass-helper-text"
          onChange={({ target }) => setConfirmPass(target.value)}
          inputName="confirmPass"
          id="confirmPass"
          label="Confirm password"
          placeholder="Confirm password"
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
    </>
  );
}
