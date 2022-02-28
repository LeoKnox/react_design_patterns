import { useState } from 'react';
import { UncontrolledForm } from './UncontrolledForm';
import { ControlledForm } from  './ControlledForm';
import { ControlledModal } from './ControlledModal';

function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);

	return (
    <>
      <ControlledModal
        shouldShow={shouldShowModal}
        onRequestClose={() => setShouldShowModal(false)}
      >
        <h1>Whee!</h1>
      </ControlledModal>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? 'Hide Modal' : 'Show Modal'}
      </button>
    </>
	);
}

export default App;