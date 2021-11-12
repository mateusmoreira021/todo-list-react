import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './Tarefas.css';

export default function Tarefas({ handleEdit, handleDel, tarefas }){
    return(
     <ul className="tarefas">
        {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
                {tarefa}
                <span>
                    <FaEdit onClick={(e) => handleEdit(e, index)} className="edit" />
                    <FaWindowClose onClick={(e) => handleDel(e, index)} className="delete" />
                </span>
            </li>
         ))}
     </ul>
    )
}

Tarefas.propsType = {
    handleEdit: PropTypes.func.isRequired,
    handleDel: PropTypes.func.isRequired,
    tarefas: PropTypes.array.isRequired,
}