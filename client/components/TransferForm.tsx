"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/Input";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  subAccountId: z.string().min(2, {
    message: "SubAccountId must be at least 10 characters.",
  }),
  email: z.string(),
  phoneNumber: z.string(),
  valueInUSD: z.string(),
  amount: z.string(),
  currency: z.string(),
});

const TransferForm = () => {
  const [isMoneyTransferred, setMoneyisTransferred] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subAccountId: "",
      email: "",
      phoneNumber: "",
      valueInUSD: "",
      amount: "",
      currency: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    const options = {
      method: "POST",
      url: "https://api-v2-sandbox.chimoney.io/v0.2/payouts/chimoney",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "X-API-KEY":
          "3e035a408b0b60636e24921f2b8a439a01176f701b99d48a83652aa715ce5740",
      },
      data: {
        chimoneys: [
          {
            email: values.email,
            phone: values.phoneNumber,
            valueInUSD: values.valueInUSD,
            amount: values.amount,
            currency: values.currency,
          },
        ],
        subAccount: values.subAccountId,
        turnOffNotification: true,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setMoneyisTransferred(true);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  return (
    <>
      <div className=''>
        <h1 className='text-2xl text-white font-extrabold pb-1'>
          Transfer to any chimoney account using it&apos;s sub account ID
        </h1>
        <div className='text-white'>
          {!isMoneyTransferred ? (
            <>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='space-y-2'
                >
                  <FormField
                    control={form.control}
                    name='subAccountId'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sub-Account ID</FormLabel>
                        <FormControl>
                          <Input
                            className='text-black'
                            placeholder='Receiver`s account ID'
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
                            className='text-black'
                            placeholder='Reciever Email address'
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
                            className='text-black'
                            placeholder='+234-XXXXXXXX'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='valueInUSD'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amount in USD</FormLabel>
                        <FormControl>
                          <Input
                            className='text-black'
                            placeholder='What is the value in USD?'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='amount'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amount</FormLabel>
                        <FormControl>
                          <Input
                            className='text-black'
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
                    name='currency'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Currency</FormLabel>
                        <FormControl>
                          <Input
                            className='text-black'
                            placeholder='USD'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    className='text-black mt-2'
                    type='submit'
                    variant='outline'
                  >
                    Submit
                  </Button>
                </form>
              </Form>
            </>
          ) : (
            <>
              <div className='text-white'>
                <h1 className='text-4xl font-extrabold'>
                  Your Money has been transferred to the user
                </h1>
                <p className='text-xl'>
                  For more information, check the console
                </p>
                <Button onClick={() => router.refresh()}>Refresh</Button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TransferForm;
