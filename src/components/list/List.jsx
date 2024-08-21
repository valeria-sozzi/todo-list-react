import React from "react";
import "./List.scss";
import ListItem from "./partials/listItem/ListItem.jsx";

function List({ activities, setActivities, selectedActivity }) {
  return (
    <ul>
      {activities.map((activity, currentIndex) => (
        <React.Fragment key={currentIndex}>
          {(selectedActivity === "Tutte" ||
            activity.completed.toString() === selectedActivity) && (
            <ListItem
              currentIndex={currentIndex}
              setActivities={setActivities}
              activities={activities}
              activity={activity}
            />
          )}
        </React.Fragment>
      ))}
    </ul>
  );
}

export default List;
