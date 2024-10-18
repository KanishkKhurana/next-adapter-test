import { createClient } from '@supabase/supabase-js';
export default function TodoList() {

  const addTodo = async (formData) => {
    'use server';
    const { value } = formData;
    console.log(value)
    console.log(formData)

    const supabaseUrl = 'URL';
    const supabaseKey = "key";
    const supabase = createClient( supabaseUrl, supabaseKey);
    const todoItem = value;
    if (!todoItem) {
      return;
    }
    // Save todo item to database
    const { data, error } = await supabase.from('todos').insert({
      todo: "vals",
    });
  };

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