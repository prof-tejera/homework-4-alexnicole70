const Number = ({ value, onClick }) => {
  /** TODO: What happens when a user clicks a number, what do we want to pass to our parent? */
  return (
    <div
      style={{
        padding: 10,
        border: "1px solid black",
        width: "auto",
      }}

      onClick={()=>onClick(value)}
    >
      {value}
    </div>
  );
};

export default Number;
