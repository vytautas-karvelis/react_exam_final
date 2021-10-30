import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModal = styled.div`
  max-width: 900px;

  background-color: #fff;
  padding: 20px;
`;

export const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-bottom: 10px;
`;

export const CloseButton = styled.span`
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;
