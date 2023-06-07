const DeleteConfirmation = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen ? (
        <div className="overlay">
          <div className="overlay_bg" onClick={closeHandler} />
          <div className="overlay_container">
            <div className="overlay_controls">
              <button className="overlay_close" onClick={closeHandler} />
            </div>
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DeleteConfirmation;
