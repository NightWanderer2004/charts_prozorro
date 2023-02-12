import s from '../../styles/main.module.scss'

const Button = props => {
   return (
      <button {...props} className={s.button}>
         {props.children}
      </button>
   )
}

export default Button
