/* eslint-disable react/prop-types */
import { useState } from "react";

const ParentToChild = () => {
  const [message, setMessage] = useState("Parent Message");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <section>
      <div>
        <h1>{message}</h1>
        <ChildToParent updateMessage={handleMessage} />
      </div>
    </section>
  );
};

const ChildToParent = ({ updateMessage }) => {
  return (
    <section>
      <button
        className="px-6 py-2 rounded-lg bg-amber-300 cursor-pointer"
        onClick={() => updateMessage("Message updated from Child")}
      >
        Update To Parent
      </button>
    </section>
  );
};

export default ParentToChild;
