import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    console.log(keyword)
  }, [keyword]);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const onChangeKeyword = e => {
    setKeyword(e.target.value);
  }

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalHeader>
          <a className='search_shuticon' href="#" onClick={handleCloseClick}>
            x
          </a>
        </StyledModalHeader>
        <input className='search-input' type='text' placeholder="You can search for 'Kyoukai' for example" value={keyword} onChange={onChangeKeyword} />
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

const StyledModalBody = styled.div`
  padding-top: 10px;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 35px;
`;

const StyledModal = styled.div`
  background: transparent;
  border-radius: 15px;
  padding: 15px;
`;
const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Modal;