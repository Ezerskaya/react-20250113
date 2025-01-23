const tabStyle = {
  marginRight: '0.5rem',
  cursor: 'pointer',
  borderRadius: '10rem',
  backgroundColor: 'white',
}

export const RestaurantsTabs = ({ listRestaurants, onTabChange }) => {

  return (
    <div style={{ marginBottom: '1rem' }}>
      {listRestaurants.map((item) => (
        <button key={item.id} style={tabStyle} onClick={() => onTabChange(item.id)}>
          {item.name}
        </button>
      ))}
    </div>
  )
}