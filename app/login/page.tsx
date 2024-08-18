import Logo from "@/components/logo";
import { InputForm, RememberMe } from '@/components/input/input';
import styles from "@/app/login/login.module.css";

export default function Login() {
  return (
    <main className="flex justify-center items-center bg-gray-200 w-screen h-screen">
      <div className={styles.loginCard}>
        <Logo />
        
        <div >
          <h1 className={styles.h1}>Sign In</h1>
          <p className={styles.p}>
            Don't have an account?{" "}
            <span className="text-blue-600 underline">Generate one</span>
          </p>
        </div>

        <div className="flex flex-col gap-3 just">
          <InputForm type="text" label="Username" placeholder="user123"/>
          <InputForm type="password" label="Password" placeholder="••••••••"/>
          <RememberMe />
        </div>

      </div>
    </main>
  );
}
