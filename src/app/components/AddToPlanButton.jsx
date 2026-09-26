"use client";


"use client";

import toast from "react-hot-toast";

const addToPlan = () => {
  toast.success("Added to Today's Plan!");
};

// import toast from "react-hot-toast";

// const handleClick = () => {
//   toast.success("Added To Plan");
// };

toast.error("Already Added!");

const toastId = toast.loading("Saving...");

setTimeout(() => {
  toast.success("Saved Successfully", {
    id: toastId,
  });
}, 2000);



const AddToPlanButton = ({ item }) => {
  const addToPlan = () => {
    const existing =
      JSON.parse(localStorage.getItem("todayPlan")) || [];

    const alreadyExists = existing.find(
      (workout) => workout.id === item.id
    );

    if (!alreadyExists) {
      existing.push(item);

      localStorage.setItem(
        "todayPlan",
        JSON.stringify(existing)
      );

      window.dispatchEvent(new Event("storage"));

      alert("Added Successfully");
    }
  };

  return (
    // <button
    //   onClick={addToPlan}
    //   className="bg-[#C8FF00] text-black font-bold px-8 py-4 rounded-2xl"
    // >
    //   Add to today's plan
    // </button>

    <button
      onClick={addToPlan}
      className="bg-[#C8FF00] text-black px-6 py-3 rounded-xl"
    >
      Add to today's plan
    </button>




  );
};

export default AddToPlanButton;