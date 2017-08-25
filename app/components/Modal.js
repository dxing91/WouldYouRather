import React from 'react'
import { default as ReactModal } from 'react-modal'
import { formatDecision } from 'helpers/utils'

export default function Modal(props) {
  const { isOpen, openModal, closeModal,
    firstDecisionText, secondDecisionText, updateModalText,
    saveAndCloseModal, userInfo, validateFields } = props
  return (
    <span onClick={openModal}>
      <span className='nav__link'>NEW</span>
      <ReactModal isOpen={isOpen} onRequestClose={closeModal}>
        <h3>Would You Rather</h3>
        <div className='modal__inputs'>
          <input
            className='modal__input'
            onChange={(e) => updateModalText('firstDecisionText', e.target.value)}
            value={firstDecisionText}
            maxLength={80}
            type='text'
            placeholder='Option #1' />
          <input
            className='modal__input'
            onChange={(e) => updateModalText('secondDecisionText', e.target.value)}
            value={secondDecisionText}
            maxLength={80}
            type='text'
            placeholder='Option #2' />
        </div>
        <button
          className='button'
          onClick={() => saveAndCloseModal(formatDecision(firstDecisionText, secondDecisionText, userInfo))}
          disabled={!validateFields}>
          SUBMIT
        </button>
      </ReactModal>
    </span>
  )
}
