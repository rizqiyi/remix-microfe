import Button from "remoteApp/Button";

const App = () => {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      <span style={{ fontSize: "20px" }}>Host Project</span>
      <Button style={{ marginTop: "20px" }} type="button">
        (from hosting)
      </Button>
    </div>
  );
};

export default App;
