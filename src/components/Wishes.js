import Wish from './Wish'

export default function Wishes ({ wishes, handleDelete, handleUpdate }) {
  return(
      <div className='nav'>
          {wishes.map(wish => 
        <div className="card">
        <Wish 
          key={wish.id} 
          wish={wish}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
        </div>
      )}
      </div>
  )
}