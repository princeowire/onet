import React from "react";

export const Register = () => {

  const handleClick = () => {
    alert('hello')
  }

  return (
    <div>

      <div className="flex py-5 flex-col gap-2 items-center justify-center">
        <p className="text-purple-text">Get started today</p>
        <h1 className="text-3xl font-bold">Register</h1>
      </div>

			<form className="flex gap-4 flex-col items-center justify-center m-4">

        <fieldset className="border border-black py-1 px-1 rounded-md">
          <legend className="px-1">Full Name</legend>
          <input className="min-w-72 outline-none px-1" type="text" required/>
        </fieldset>

        <fieldset className="border border-black  py-1 px-1 rounded-md">
          <legend className="px-1">Email</legend>
          <input className="min-w-72 outline-none px-1" type="email" required/>
        </fieldset>

        <fieldset className="border border-black py-1 px-1 rounded-md">
          <legend className="px-1">Phone Number</legend>
          <input className="min-w-72 outline-none px-1" type="tel" required/>
        </fieldset>

        <div className="min-w-72 flex flex-col gap-4">

          <fieldset required className="flex flex-col">

            <h3>Gender</h3>

            <label htmlFor="" className="flex gap-1">
              <input type="radio" name="one" id="" />
              <p>Male</p>
            </label>

            <label htmlFor="" className="flex gap-1">
              <input type="radio" name="one" id="" />
              <p>Female</p>
            </label>

            <label htmlFor="" className="flex gap-1">
              <input type="radio" name="one" id="" />
              <p>Rather not say</p>
            </label>

          </fieldset>

          <select name="" id="" className="bg-light-gray p-2" required>
            <option value="">Chose Course</option>
            <option value="">Ui/UX</option>
            <option value="">Frontend</option>
            <option value="">Backend</option>
          </select>

          <button className="px-4 py-2 w-fit bg-btn-color text-white rounded-xl" type="submit" onClick={handleClick}>submit</button>

        </div>

      </form>

    </div>
  );
};
