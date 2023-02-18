export const Square = ({children, isSelected, updateBoard, index}) => {
  // console.log('isSelected: ', isSelected)
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    // with index we know where you clicked
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}