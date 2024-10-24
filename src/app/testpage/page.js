import { createClient } from '@supabase/supabase-js';
export default function TodoList() {

//   const addTodo = async (formData) => {
//     'use server';
//     const { value } = formData;
//     console.log(value)
//     console.log(formData)

//     const supabaseUrl = 'https://glslxwlwbkpzdxkudnrb.supabase.co';
//     const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdsc2x4d2x3YmtwemR4a3VkbnJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkyNTE2MjEsImV4cCI6MjA0NDgyNzYyMX0.5m6xqsUJJP7F6ibVVHrWLpg1t4QLW5iirC-kao9dw_Q";
//     const supabase = createClient( supabaseUrl, supabaseKey);
//     const todoItem = value;
//     if (!todoItem) {
//       return;
//     }
//     // Save todo item to database
//     const { data, error } = await supabase.from('todos').insert({
//       todo: "vals",
//     });
//   };

  return (
    <>
     <h2>Server Actions Demo</h2>
        <div>
          <form action={addTodo} method="POST">
            <div>
              <label htmlFor="todo">Todo</label>
              <div>
                <input id="todo" name="text" type="text"
                  placeholder="What needs to be done?"
                  required
                  className='text-emerald-700'
                />
              </div>
            </div>
            <div>
              <button type="submit"> Add Todo</button>
            </div>
          </form>
        </div>
    </>
  );
}