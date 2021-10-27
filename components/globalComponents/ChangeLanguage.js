import { useRouter } from "next/dist/client/router";

export  default function ChangeLanguage() {
   const router = useRouter();
   
  const handleChangeLanguage = ({target})=> {
    router.push(router.pathname,router.pathname,{
      locale: target.value
    })
  }

  return (
    <select onChange={handleChangeLanguage} style={{marginLeft:'10px'}}>
      <option  value="es" key="1">
       🇨🇴 
      </option>
      <option value="en" key="2">
        🇺🇸
      </option>
    </select>
  );
}

