import React from 'react';
import { BsTrash3Fill, BsFillPencilFill } from 'react-icons/bs';

interface ListItem{
  id: string;
  title: string;
}

interface GListProps {
  items: ListItem[];
  removeItem: (id: string) => void;
  editItem: (id: string) => void;
}

const GList: React.FC<GListProps> = ({ items, removeItem, editItem }) => {
  return (
    <div className='grocery-list'>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className='grocery-item' key={id}>
            <p className='title'>{title}</p>
            <div className='btn-container'>
              <button
                type='button'
                className='edit-btn'
                onClick={() => editItem(id)}
              >
                <BsFillPencilFill />
              </button>
              <button
                type='button'
                className='delete-btn'
                onClick={() => removeItem(id)}
              >
                <BsTrash3Fill />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default GList;