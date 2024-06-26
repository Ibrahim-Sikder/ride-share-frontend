"use client";
// import ActionSubmitButton from "@/components/button/ActionSubmitButton";
import { Input } from "@nextui-org/react";
import { createRef, useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { loginUser } from "../actions/auth";
import ActionSubmitButton from "../components/button/ActionSubmitButton";

export default function LoginForm() {
  const [state, fromAction] = useFormState(loginUser, null)
  const ref = createRef<HTMLFormElement>()
  const router = useRouter()
  try{
    if(state && state?.success){
      toast.success(state?.message)
      router.push('/')
    }
    if(state && !state?.success){
      toast.error(state?.message)
    }

  }catch(err){
    console.log(err)
  }

  useEffect(()=>{
    console.log(state)

  },[state,ref])

  return (
    <div>
      <form ref={ref} action={fromAction}>
        <Input name="email" type="email" label="Email" variant="bordered" />
        <Input
          className="mt-3"
          name="password"
          type="password"
          label="Password"
          variant="bordered"
        />
        <div className="flex justify-end text-primary">
          <Link href="/register">if you dont have account sign Up</Link>
        </div>
        <div className="flex justify-end mt-3">
          <ActionSubmitButton>login</ActionSubmitButton>
        </div>
      </form>
    </div>
  );
}
