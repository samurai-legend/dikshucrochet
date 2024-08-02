"use client";

import { trpc } from "@/app/_trpc/client";
import { serverClient } from "@/app/_trpc/serverClient";
import { useState } from "react";

export default function TodoList({
  initialTodos,
}: {
  initialTodos: Awaited<ReturnType<(typeof serverClient)["getTodos"]>>;
}) {
  const getTodos = trpc.getTodos.useQuery(undefined, {
    initialData: initialTodos,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
  const addTodo = trpc.addTodo.useMutation({
    onSettled: () => {
      getTodos.refetch();
    },
  });
  const [conetent, setContent] = useState("");

  return (
    <div>
      <div>{JSON.stringify(getTodos.data)}</div>
      <div>
        <label htmlFor="content">Content</label>
        <input
          type="text"
          id="content"
          value={conetent}
          onChange={(e) => setContent(e.target.value)}
          className="font-body"
        />
        <button
          onClick={async () => {
            if (conetent.length) {
              addTodo.mutate(conetent);
              setContent("");
            }
          }}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}
