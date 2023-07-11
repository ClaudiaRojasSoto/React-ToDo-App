import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import { useTodosContext } from '../context/TodosContext';
import { useAuthContext } from '../context/AuthContext';
import styles from '@/styles/TodoItem.module.css';

const TodoItem = ({ itemProp }) => {
  const [editing, setEditing] = useState(false);

  const { handleChange, delTodo, setUpdate } = useTodosContext();
  const { user } = useAuthContext();

  const editInputRef = useRef(null);

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setUpdate(editInputRef.current.value, itemProp.id);
      setEditing(false);
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
        {user && (
          <button type="button" className={styles.iconsContainer} onClick={handleEditing}>
            <AiFillEdit style={{ color: '#5e5e5e', fontSize: '16px' }} />
          </button>
        )}
        <button type="button" className={styles.iconsContainer} onClick={() => delTodo(itemProp.id)}>
          <FaTrash style={{ color: '#5e5e5e', fontSize: '16px' }} />
        </button>
      </div>
      <input
        type="text"
        ref={editInputRef}
        defaultValue={itemProp.title}
        className={styles.textInput}
        style={{ display: editing ? 'block' : 'none' }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
  
};

TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default TodoItem;
