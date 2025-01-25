const tabStyle = {
  marginBottom: '1rem',
  marginRight: '0.5rem',
  cursor: 'pointer',
  borderRadius: '10rem',
  backgroundColor: 'white',
}

export const RestaurantsTabs = ({ isActive, onClick, title }) => {

  return (
    <button style={tabStyle} onClick={onClick} disabled={isActive}>
      {title}
    </button>
  )
}