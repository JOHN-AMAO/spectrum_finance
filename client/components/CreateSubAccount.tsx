"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  phoneNumber: z.string(),
});
const CreateSubAccount = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
  });
  const [subAccountCreated, setSubAccountCreated] = useState(false);
  function onSubmit(values: z.infer<typeof formSchema>) {
    axios.post("create-sub-account", values);
    const options = {
      method: "POST",
      url: "https://api-v2-sandbox.chimoney.io/v0.2/sub-account/create",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "X-API-KEY":
          "3e035a408b0b60636e24921f2b8a439a01176f701b99d48a83652aa715ce5740",
      },
      data: {
        name: values.name,
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: values.phoneNumber,
      },
    };

    axios
      .request(options)
      .then(async function (response) {
        console.log(response.data);
        setSubAccountCreated(true);
        console.log(values);
      })

      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          {" "}
          <Button> Create Sub Account</Button>
        </DialogTrigger>
        <DialogContent>
          {!subAccountCreated ? (
            <>
              <DialogHeader>
                <DialogTitle>
                  Create Sub Account to be able to transfer and recieve payments
                </DialogTitle>
              </DialogHeader>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='space-y-4'
                >
                  <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Mide Jones'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='user@mail.com'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='firstName'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder=''
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='lastName'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder=''
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='phoneNumber'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='+234-XXXXXXXXXX'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type='submit'>Submit</Button>
                </form>
              </Form>
            </>
          ) : (
            <div>
              <DialogHeader>
                <DialogTitle>
                  Your Sub Account has been successfully created
                </DialogTitle>
                <DialogDescription>
                  Now that your sub account has been created, you can now
                  perform actions on your account
                </DialogDescription>
              </DialogHeader>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateSubAccount;
