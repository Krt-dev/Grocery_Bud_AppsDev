import React, { useState } from 'react';
import { BsTrash3Fill, BsFillPencilFill,BsCartCheck } from 'react-icons/bs';

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
  const [strikethroughItems, setStrikethroughItems] = useState<string[]>([]);

  const toggleStrikethrough = (id: string) => {
    if (strikethroughItems.includes(id)) {
      setStrikethroughItems(strikethroughItems.filter((item) => item !== id));
    } else {
      setStrikethroughItems([...strikethroughItems, id]);
    }
  };
  return (
    <div className='grocery-list'>
      {items.map((item) => {
        const { id, title } = item;
        const isStrikethrough = strikethroughItems.includes(id);
        return (
          <article className='grocery-item' key={id}>
            <p className={`title ${isStrikethrough ? 'strikethrough' : ''}`}>{title}</p>
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
              <button
                type='button'
                className='edit-btn'
                onClick={() => toggleStrikethrough(id)}
              >
                <BsCartCheck/>
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default GList;