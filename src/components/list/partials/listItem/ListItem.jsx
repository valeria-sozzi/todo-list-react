import { useState } from "react";

function ListItem({ activity, currentIndex, setActivities, activities }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState("");

  return (
    <li>
      {isEdit ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
      ) : (
        <span
          className={activity.completed ? "completed" : ""}
          onClick={() => {
            const newActivities = [...activities];
            newActivities.map((activity, index) => {
              if (currentIndex === index) {
                activity.completed = !activity.completed;
              }
            });
            setActivities(newActivities);
          }}
        >
          {activity.text}
        </span>
      )}
      {isEdit ? (
        <>
          <button
            onClick={() => {
              const newActivities = [...activities];
              newActivities.map((activity, index) => {
                if (index === currentIndex) {
                  activity.text = editValue;
                }
              });
              setActivities(newActivities);
              setIsEdit(false);
            }}
            disabled={activity.text === editValue}
          >
            Salva
          </button>
          <button
            onClick={() => {
              setIsEdit(false);
            }}
          >
            Annulla
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            setIsEdit(true);
            setEditValue(activity.text);
          }}
        >
          Modifica
        </button>
      )}

      <span
        className="remove"
        onClick={() => {
          const newActivities = [...activities];
          newActivities.splice(currentIndex, 1);
          setActivities(newActivities);
        }}
      >
        X
      </span>
    </li>
  );
}

export default ListItem;
