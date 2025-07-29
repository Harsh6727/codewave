// 1️⃣ Add this directive at the very top (no import!)
"use client";

import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query"; 
import { useTRPC } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Page = () => {
  const [value, setValue] = useState("");
  const trpc = useTRPC();
  const {data: messages} = useQuery(trpc.messages.getMany.queryOptions());
  const createMessage = useMutation(trpc.messages.create.mutationOptions({
    onSuccess: ()=>{
      toast.success("Message Created")
    }
  }));

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button onClick={() => createMessage.mutate({ value: value })}>
        Invoke Background job
      </Button>
      
      {JSON.stringify(messages, null )}
    </div>
  );
};

export default Page;
