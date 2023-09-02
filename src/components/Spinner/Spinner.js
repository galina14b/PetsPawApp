import RingLoader from "react-spinners/RingLoader";

const override = {
  display: "block",
  margin: "300px auto",
  borderColor: "#FBE0DC",
};

const Spinner = () => {

  
  return (
      <RingLoader
        color={"#FBE0DC"}
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  )
}

export { Spinner };