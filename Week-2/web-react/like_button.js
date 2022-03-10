const e = React.createElement;

function LikeButton() {
  return e(
    "button",
    {
      onClick: () => alert("success"),
      style: {
        color: "white",
        backgroundColor: "blue",
        height: "50px",
        width: "100px",
        borderRadius: "5px",
        border: "none",
        boxShadow: "none",
        cursor: "pointer",
      },
    },
    "Like"
  );
}

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(LikeButton), domContainer);
