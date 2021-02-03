import Button from "components/common/Button";

const Modal = ({ handleChange, handleJoin }) => {
  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Join Room
            </h5>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Room id</label>
                <input
                  type="input"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter room id"
                  onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Input room id to join.
                </small>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <Button type="secondary" dataDismiss="modal" label="Close" />
            <Button
              type="primary"
              dataDismiss="modal"
              label="Join Room"
              onClick={handleJoin}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
