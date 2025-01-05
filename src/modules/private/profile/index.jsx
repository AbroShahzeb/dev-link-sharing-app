import { MobileLinkProfileView } from "../../../generalComponents/MobileLinkProfileView";
import { Button } from "../../../generalComponents/Button";
import { CustomImageUploader } from "../../../generalComponents/CustomImageUploader";
import { CustomInput } from "../../../generalComponents/CustomInput";
import { useState } from "react";
import { fileToBase64 } from "../../../helpers";
import { useDispatch } from "react-redux";
import { setEmail, setFirstName, setLastName, setPicture } from "./redux/slice";
import { useSelector } from "react-redux";

export const Profile = () => {
  const [firstName, setFirst] = useState(
    useSelector((state) => state.user.firstName)
  );
  const [lastName, setLast] = useState(
    useSelector((state) => state.user.lastName)
  );
  const [email, setEmailLocal] = useState(
    useSelector((state) => state.user.email)
  );

  const dispatch = useDispatch();

  const onProfileChange = (file) => {
    fileToBase64(file)
      .then((base64String) => {
        dispatch(setPicture(base64String));
      })
      .catch((error) => {
        console.error("Error converting file to Base64:", error);
      });
  };

  const handleFirstNameChange = (value) => {
    console.log("Value name", value);
    setFirst(value);
    dispatch(setFirstName(value));
  };

  const handleLastNameChange = (value) => {
    console.log("value last name", value);
    setLast(value);
    dispatch(setLastName(value));
  };

  const handleEmailChange = (value) => {
    setEmailLocal(value);
    dispatch(setEmail(value));
  };
  return (
    <main className="h-[calc(100vh-80px)]  p-6 flex gap-6">
      {/* PHONE MOCKUP  */}
      <div className="hidden h-full lg:flex overflow-y-auto scrollbar-none items-center justify-center w-[560px] p-6 bg-white rounded-[12px]">
        <MobileLinkProfileView />
      </div>

      {/* FORM ACTIONS  */}
      <div className="rounded-[12px] bg-white flex-1 flex flex-col overflow-y-auto scrollbar-none">
        <div className="p-10 flex flex-col gap-10 ">
          <div className="flex flex-col gap-2 items-start">
            <h2 className="heading-m text-dark">Profile details</h2>
            <p className="body-m text-light-500">
              Add your details to create a personal touch to your profile.
            </p>
          </div>

          <div className="h-full flex flex-col gap-5 ">
            <div className="p-5 bg-light-100 rounded-[12px] grid grid-cols-3 gap-6 items-center body-m text-light-500">
              <div>Profile Picture</div>
              <div className="mr-6 ml-4">
                <CustomImageUploader onImageChange={onProfileChange} />
              </div>
              <div>
                Image must be below 1024x1024px.
                <br /> Use PNG or JPG format.
              </div>
            </div>

            <div className="p-5 bg-light-100 rounded-[12px] flex flex-col gap-3 body-m text-light-500 overflow-y-auto">
              <div className="flex items-center gap-4 justify-between ">
                <label>First name*</label>
                <CustomInput
                  placeholder="e.g. John"
                  className="lg:w-[434px]"
                  value={firstName}
                  setValue={handleFirstNameChange}
                />
              </div>
              <div className="flex items-center gap-4 justify-between ">
                <label>Last name*</label>
                <CustomInput
                  placeholder="e.g. Appleseed"
                  className="lg:w-[434px]"
                  value={lastName}
                  setValue={handleLastNameChange}
                />
              </div>
              <div className="flex items-center gap-4 justify-between ">
                <label>Email*</label>
                <CustomInput
                  placeholder="e.g. email@example.com"
                  className="lg:w-[434px]"
                  value={email}
                  setValue={handleEmailChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* SAVE ACTION BUTTON */}
        <div className="mt-auto flex items-center justify-end border-t border-light-300 px-10 py-6">
          <Button label="Save" />
        </div>
      </div>
    </main>
  );
};
