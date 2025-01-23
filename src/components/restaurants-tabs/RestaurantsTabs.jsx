export const RestaurantsTabs = ({ listsName, onTabChange }) => {

  const tabStyle = {
    marginRight: '0.5rem',
    cursor: 'pointer',
    borderRadius: '10rem',
    backgroundColor: 'white',
  }

  return (
    <div style={{ marginBottom: '1rem' }}>
      {listsName.map((item, index) => (
        <button key={item.id} style={tabStyle} onClick={() => onTabChange(index)}>
          {item.name}
        </button>
      ))}
    </div>
  )
}