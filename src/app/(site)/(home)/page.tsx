"use client";
import { api } from "@/provider/trpc-provider";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Form } from "@/components/ui/form";

const page = () => {
  const hello = api.example.hello.useQuery({ text: "Fahad" });

  // const form = useForm<z.infer<typeof GetStartedFormSchema>>({
  //   resolver: zodResolver(GetStartedFormSchema),
  //   defaultValues: {
  //     name: "",
  //     phone: "",
  //     email: "",
  //     services: "",
  //   },
  // });

  // async function onSubmit(values: z.infer<typeof GetStartedFormSchema>) {
  //   console.log(values);
  // }

  return (
    <div>
      {hello.data?.greeting}
      <br />
      {/* <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="div_container mt-8 gap-6"
        >
        </form>
      </Form> */}
    </div>
  );
};

export default page;
