import s from '../../styles/main.module.scss'

const Title = ({ children }) => {
   return <h4 className={s.title}>{children}</h4>
}

export default Title
