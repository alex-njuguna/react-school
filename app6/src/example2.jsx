import { useEffect, useState } from "react";
import createConnection from "./chat";

const serverUrl = "https://localhost:1234";

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
  return <h1>Welcome to the room {roomId}</h1>;
}

export default function ChatRoomImplementation() {
  const [roomId, setRoomId] = useState("peter");
  const [show, setShow] = useState(false);

  return (
    <>
      <label htmlFor="chatRoom">
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="peter">peter</option>
          <option value="music">music</option>
          <option value="programming">programming</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? "Close chat" : "Open chat"}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}
