import s from '../styles/welcomePage.module.scss'

const WelcomePage = () => {
   return (
      <div className={s.welcome}>
         <h2 className={s.title}>Вiтаю в MarketFlow!</h2>
         <p className={s.text}>
            Це тестове завдання для <span>"Софтліст"</span>
         </p>
         <p className={s.text}>Натискай на кнопки в меню та потрапляй на iншi сторiнки 😉</p>
      </div>
   )
}

export default WelcomePage
