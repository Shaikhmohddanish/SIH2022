import React, { useState } from "react";

//Components
// import InputField from "../../components/input/InputField";
import UpdateForm from "./UpdateForm";
//Functions
import { useSelector } from "react-redux";

const Profile = () => {
  const authState = useSelector((state) => state.authReducer);
  const user = authState.user.data;
  const [edit, setEdit] = useState(false);
  return (
    <div>
      {edit && <UpdateForm onChange={setEdit} />}
      <div className="p-9">
        <div className="p-9 shadow-lg rounded-2xl bg-white">
          <h1 className="text-4xl text-[#4f4f4f] font-bold">Profile</h1>
          <p className="text-xl text-[#4f4f4f] font-semibold my-4">
            View and Edit your profile.
          </p>

          <div className="h-full">
            <div className="border-b-2 block md:flex">
              <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
                <div className="flex justify-between">
                  <span className="text-xl font-semibold block">
                    Admin Profile
                  </span>
                  <button
                    onClick={() => {
                      setEdit(true);
                    }}
                    className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800 cursor-pointer"
                  >
                    Edit
                  </button>
                </div>
                <div className="w-full p-8 mx-2 flex justify-center">
                  <img
                    id="showImage"
                    className="max-w-xs w-64 items-center border"
                    src={user.profile_image}
                    alt=""
                  />
                </div>
              </div>

              <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
                <div className="rounded  shadow p-6">
                  <div className="grid grid-cols-3 auto-cols-auto">
                    <div className="pb-6">
                      <label
                        htmlFor="name"
                        className="font-semibold text-gray-700 block pb-1"
                      >
                        First Name
                      </label>
                      <div className="flex">
                        <p className="bg-gray-100 px-9 p-2">
                          {user.first_name}
                        </p>
                      </div>
                    </div>
                    <div className="pb-6">
                      <label
                        htmlFor="name"
                        className="font-semibold text-gray-700 block pb-1"
                      >
                        Last Name
                      </label>
                      <div className="flex">
                        <p className="bg-gray-100 px-9 p-2">{user.last_name}</p>
                      </div>
                    </div>
                    <div className="pb-6">
                      <label
                        htmlFor="name"
                        className="font-semibold text-gray-700 block pb-1"
                      >
                        Email
                      </label>
                      <div className="flex">
                        <p className="bg-gray-100 px-9 p-2">{user.email}</p>
                      </div>
                    </div>
                    <div className="pb-6">
                      <label
                        htmlFor="name"
                        className="font-semibold text-gray-700 block pb-1"
                      >
                        Address
                      </label>
                      <div className="flex">
                        <p className="bg-gray-100 px-9 p-2 text-[#4f4f4f]">
                          {user.address === ""
                            ? "No Address added yet"
                            : user.address}
                        </p>
                      </div>
                    </div>
                    <div className="pb-6">
                      <label
                        htmlFor="name"
                        className="font-semibold text-gray-700 block pb-1"
                      >
                        City
                      </label>
                      <div className="flex">
                        <p className="bg-gray-100 px-9 p-2">
                          {user.city === "" ? "No City added yet" : user.city}
                        </p>
                      </div>
                    </div>
                    <div className="pb-6">
                      <label
                        htmlFor="name"
                        className="font-semibold text-gray-700 block pb-1"
                      >
                        State
                      </label>
                      <div className="flex">
                        <p className="bg-gray-100 px-9 p-2">
                          {user.state === "" ? "No State added yet" : user.city}
                        </p>
                      </div>
                    </div>
                    <div className="pb-6">
                      <label
                        htmlFor="name"
                        className="font-semibold text-gray-700 block pb-1"
                      >
                        Pincode
                      </label>
                      <div className="flex">
                        <p className="bg-gray-100 px-9 p-2">{user.pin_code}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
