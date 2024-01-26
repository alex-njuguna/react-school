import { getImageUrl } from "./utils";
import "./App.css";

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function App() {
  return (
    <>
      <Avatar
        person={{
          name: "Katsuko saruhashi",
          imageId: "YfeOqp2",
        }}
        size={100}
      />

      <Avatar
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
        size={80}
      />

      <Avatar
        person={{
          name: "Lin Lanying",
          imageId: "1bX5QH6",
        }}
        size={50}
      />
    </>
  );
}
