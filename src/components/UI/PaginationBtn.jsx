import Button from './Button'

const PaginationBtn = ({ children, changePage }) => {
   return <Button onClick={changePage}>{children}</Button>
}

export default PaginationBtn
