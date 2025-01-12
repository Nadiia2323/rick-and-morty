import "./Modal.css";

function Modal({ character, callback }) {
  return (
    <>
      <div className="modal">
        <div className="container" key={character?.id}>
          <h3 className="charactre-name">{character?.name}</h3>
          <img className="picture" src={character?.image} alt="" />
          <p className="infotext">Species: {character?.species}</p>
          <p className="infotext">Status: {character?.status}</p>
          <button className="closebutton" onClick={callback}>
            Close
          </button>
        </div>
      </div>
    </>
  );
}
export default Modal;
