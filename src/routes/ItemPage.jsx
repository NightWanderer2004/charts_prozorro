import s from '../styles/item.module.scss'
import { Link, useParams } from 'react-router-dom'
import { useGetItemQuery } from '../redux/api/apiSlice'
import ErrorText from '../components/UI/ErrorText'
import Button from '../components/UI/Button'

const ItemPage = () => {
   const { type, itemId } = useParams()
   const { data, isLoading, isError, isFetching } = useGetItemQuery({ id: itemId, type })

   if (isLoading || isFetching) return <h3>Завантажую...</h3>
   else if (isError) return <ErrorText>Щось пiшло не так :(</ErrorText>

   return (
      <div>
         {!isLoading && (
            <>
               <Button>
                  <Link to={`/${type}`}>Назад</Link>
               </Button>
               <DisplayObject obj={data.data} />
            </>
         )}
      </div>
   )
}

const DisplayObject = ({ obj }) => {
   return (
      <ul className={s.list}>
         {Object.entries(obj).map(([key, value]) => {
            if (typeof value === 'object' && value !== null) {
               return (
                  <li key={key}>
                     <p className={s.key}>{key}:</p>
                     <DisplayObject obj={value} />
                  </li>
               )
            } else {
               return (
                  <li key={key}>
                     <p className={s.key}>{key}:</p> {value}
                  </li>
               )
            }
         })}
      </ul>
   )
}

export default ItemPage
