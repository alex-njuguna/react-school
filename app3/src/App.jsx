import { getImageUrl } from "./utils";
import "./App.css";

function Avatar({ person, size = 100 }) {
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

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default function App() {
  return (
    <>
      <Card>
        <Avatar
          person={{
            name: "Katsuko saruhashi",
            imageId: "YfeOqp2",
          }}
          size={100}
        />
      </Card>

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
        // size={50}
      />

      <Card>
        <h1 style={{ color: "black", fontSize: "1rem" }}>Hello World</h1>
      </Card>
    </>
  );
}
