"use client";

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
    <button
      onClick={addToPlan}
      className="bg-[#C8FF00] text-black font-bold px-8 py-4 rounded-2xl"
    >
      Add to today's plan
    </button>
  );
};

export default AddToPlanButton;