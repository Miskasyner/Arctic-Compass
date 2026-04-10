"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AIInputBar() {
  const [input, setInput] = useState("");

  return (
    <div className="border-t bg-card p-4">
      <div className="max-w-3xl mx-auto flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything about your move to Salla..."
          className="flex-1 rounded-lg border border-input bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <Button size="icon" disabled={!input.trim()}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
      <div className="max-w-3xl mx-auto mt-2 flex gap-2 flex-wrap">
        {["What jobs match my skills?", "Tell me about housing", "How do I get a tax card?"].map(
          (suggestion) => (
            <button
              key={suggestion}
              onClick={() => setInput(suggestion)}
              className="text-xs px-3 py-1 rounded-full border hover:bg-muted transition-colors text-muted-foreground"
            >
              {suggestion}
            </button>
          )
        )}
      </div>
    </div>
  );
}
