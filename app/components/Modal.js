import React from 'react'
import { default as ReactModal } from 'react-modal'
import { formatDecision } from 'helpers/utils'

export default function Modal(props) {
  const { isOpen, openModal, closeModal,
    firstDecisionText, secondDecisionText, updateModalText,
    saveAndCloseModal, userInfo } = props
  return (
    <span onClick={openModal}>
      New Decision
      <ReactModal isOpen={isOpen} onRequestClose={closeModal}>
        <div>
          <span>Would You Rather</span>
          <span onClick={closeModal}>X</span>
        </div>
        <div>
          <input
            onChange={(e) => updateModalText('firstDecisionText', e.target.value)}
            value={firstDecisionText}
            maxLength={80}
            type='text'
            placeholder='First option' />
        </div>
        <div>
          <input
            onChange={(e) => updateModalText('secondDecisionText', e.target.value)}
            value={secondDecisionText}
            maxLength={80}
            type='text'
            placeholder='Second option' />
        </div>
        <button onClick={saveAndCloseModal(formatDecision(firstDecisionText, secondDecisionText, userInfo))}>
          Submit
        </button>
      </ReactModal>
    </span>
  )
}
