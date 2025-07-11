import { useEffect, useRef } from "react";
import Modal, { type ModalHandle } from "../UI/Modal/Index";
import { Button } from "react-bootstrap";

interface UpcomingSessionsProps {
  onClose: () => void;
}

const UpcomingSessions = ({ onClose }: UpcomingSessionsProps) => {
  const modal = useRef<ModalHandle>(null);

  // useEffect is used to open the Modal via its exposed `open` method when the component is mounted
  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  return (
    <Modal ref={modal} onClose={onClose}>
      <h2>Upcoming Sessions</h2>

      <p>No upcoming sessions</p>
      <p className="actions">
        <Button onClick={onClose}>Close</Button>
      </p>
    </Modal>
  );
};

export default UpcomingSessions;
