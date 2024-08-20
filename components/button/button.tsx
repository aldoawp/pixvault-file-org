import styles from '@/components/button/button.module.css';

export default function Button({type} : {type: "submit"|"button"|"reset"}) {
  return (
    <button type={type} className={`${styles.simpleButton} `}>
      <p>Get Started</p>
    </button>
  )
}