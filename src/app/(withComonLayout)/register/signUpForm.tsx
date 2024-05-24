"use client";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createRef, useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
// import { signUpUser } from "../actions/auth";
import ActionSubmitButton from "../components/button/ActionSubmitButton";
import { signUpUser } from "../actions/auth";

export default function SignUpForm() {
  // const ref = createRef<HTMLFormElement>();
  // const router = useRouter();
  // const [state, formAction] = useFormState(signUpUser, null);

  // useEffect(() => {
  //   if (state && state?.success) {
  //     toast.success("successfully signUp", { id: 1, duration: 2000 });
  //     ref.current!.reset();
  //     router.push("/login");
  //   }
  //   if (state && !state?.success) {
  //     toast.error(state?.message, { id: 1, duration: 2000 });
  //   }
  // }, [router, state, ref]);



  const [state, formAction] = useFormState(signUpUser, null)
const ref = createRef<HTMLFormElement>()
  useEffect(()=>{
    if(state && state.success){
      toast.success('User create successfully!');
      ref.current?.reset()
    }
  },[state, ref])
  return (
    <div>
      <form action={formAction}>
        <Input name="name" type="text" label="Name" variant="bordered" />
        <Input
          name="email"
          className="mt-3"
          type="email"
          label="Email"
          variant="bordered"
        />
        <Input
          className="mt-3"
          type="password"
          label="Password"
          name="password"
          variant="bordered"
        />
        <div className="flex justify-end text-primary">
          <Link href="/login">already have account ?</Link>
        </div>
        <div className="flex justify-end mt-3">
          <ActionSubmitButton>signUp</ActionSubmitButton>
        </div>
      </form>
    </div>
  );
}
