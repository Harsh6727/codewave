import Image from "next/image";
import { useState, useEffect } from "react";

const ShimmerMessages = () => {
const messages = [
    "Thinking",
    "Loading...",
    "Generating...",
    "Analyzing your request...",
    "Building your website...",
    "Crafting components...",
    "Optimizing layout...",
    "Wiring interactions...",
    "Managing state...",
    "Improving performance...",
    "Running quick tests...",
    "Polishing accessibility...",
    "Preparing assets...",
    "Adding final touches...",
    "Almost ready...",
  ];
  

    const [currentMessageIndex, setCurrentMessageIndex ] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentMessageIndex((prev=>(prev+1)%messages.length))
        }, 5000)
        return () => clearInterval(interval)
    }, [messages.length])

    return (
        <div className="flex items-center gap-2">
            <span className="text-base text-muted-foreground animate-pulse">
                {messages[currentMessageIndex]}
            </span>
        </div>
    )
}

export const MessageLoading = () => {
    return (
        <div className="flex flex-col group px-2 pb-4">
            <div className="flex itmes-center gap-2 pl-2 mb-2">
                <Image src="/logo.svg" alt="Codewave" width={18} height={18} className="shrink-0"/>
                <span className="text-sm font-medium">Codewave</span>
            </div>
            <div className="pl-8.5 flex flex-xol gap-y-4">
                <ShimmerMessages />
            </div>
        </div>
    )
}
