"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

export function EmailSubscribeForm() {
  const [apiReqStatus, setApiReqStatus] = useState<
    "pending" | "loading" | "error" | "success"
  >("pending");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setApiReqStatus("loading");
    const data = await fetch("/api/subscribers", {
      method: "POST",
      body: JSON.stringify(values),
    });
    if (!data.ok) {
      form.setError("email", {
        type: "manual",
        message: "something went wrong submitting your email!",
      });
    } else {
      setTimeout(() => {
        setApiReqStatus("pending");
        form.reset({ email: "" });
      }, 5000);
    }
    setApiReqStatus(data.ok ? "success" : "error");
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-2 w-full"
      >
        <FormField
          disabled={apiReqStatus === "loading"}
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center w-full gap-2 md:w-1/2">
              <FormControl>
                <Input placeholder="you@mail.com" {...field} />
              </FormControl>
              <FormMessage className="bg-dark-purp p-1 rounded-md">
                {apiReqStatus === "success" && (
                  <span className="text-accent">Thanks for signing up!</span>
                )}
              </FormMessage>
            </FormItem>
          )}
        />
        <Button variant={"ghost"} type="submit">
          Sign up for (very occasional) updates
        </Button>
      </form>
    </Form>
  );
}
