import Wish from './Wish'

export default function Wishes ({ wishes, handleDelete, handleUpdate }) {
  return(
      <div>
          {wishes.map(wish => 
        <Wish 
          key={wish.id} 
          wish={wish}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      )}
      </div>
  )
}