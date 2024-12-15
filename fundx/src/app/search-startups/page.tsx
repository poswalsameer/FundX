"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import Header from "../appComponents/Header";

function Page() {
  const headerElements: string[] = [];

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setResponse("");

    if (prompt === "") {
      toast({
        title: "Please enter a prompt",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/search-startup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ startupName: prompt }),
      });

      if (response.status === 405) {
        toast({
          title: "Method Not Allowed: Please check the API endpoint.",
          variant: "destructive",
        });
      } else {
        console.log("response: ", response);
        const reader = response.body?.getReader();
        if (!reader) return;
        const decoder = new TextDecoder();
        let content = "";
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          content += chunk;
          setResponse((prev) => prev + chunk);
        }
      }
    } catch (err) {
      console.error("Error while fetching AI response:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (

    <div
      className="min-h-screen flex flex-col py-20 text-white"
      id="heroBackground"
    >
      <Header headerElements={headerElements} />
      <div className="flex-grow w-full flex flex-col justify-start items-center max-w-2xl mx-auto px-4 mb-20">
        <form onSubmit={handleSubmit} className="mt-5 space-y-5">
          <h1 className="text-2xl font-bold text-center">
            Enter the name of the startup you are interested in
          </h1>
          <div className="flex items-center">
            <Input
              type="text"
              placeholder="Enter your prompt here"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={isLoading}
              className="h-14 w-96 font-medium px-8 flex-grow rounded-l-full border-none bg-gray-900/70 focus-visible:outline-none"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="h-14 w-32 rounded-r-full font-bold bg-black hover:bg-black/80 text-white px-6 py-2 transition duration-150 ease-in-out"
            >
              {isLoading ? "Loading..." : "Enter"}
            </Button>
          </div>
        </form>
      </div>
      {response && (
        <div className="fixed bottom-0 left-0 right-0 flex flex-col gap-y-5 items-center bg-gradient-to-t from-black to-transparent pt-10">
          <h2 className="text-2xl text-center font-bold mb-2">
            Here are the unfiltered details
          </h2>
          <p
            className="w-full max-w-[55rem] p-12 text-left font-semibold border border-black rounded-t-lg mb-0 shadow-lg text-white overflow-y-auto max-h-[50vh] "
            id="responseDiv"
          >
            <ReactMarkdown className="prose">{response}</ReactMarkdown>
          </p>
        </div>
      )}
    </div>
  );
}

export default Page;
