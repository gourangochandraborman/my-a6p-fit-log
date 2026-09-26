"use client";

const SaveWorkoutButton = ({ item }) => {

    const saveWorkout = () => {

        const existing =
            JSON.parse(localStorage.getItem("savedPlan")) || [];

        const alreadyExists = existing.find(
            (workout) => workout.id === item.id
        );

        if (!alreadyExists) {

            existing.push(item);

            localStorage.setItem(
                "savedPlan",
                JSON.stringify(existing)
            );

            window.dispatchEvent(
                new Event("storage")
            );
        }
    };

    return (
        <button
            onClick={saveWorkout}
            className="border border-[#1B2233] text-white px-8 py-4 rounded-2xl"
        >
            Save for later
        </button>
    );
};

export default SaveWorkoutButton;