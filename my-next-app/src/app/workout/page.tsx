import { Counter } from './Counter'

export default function WorkoutPage() {

  return (
    <main>
      <h1>Workout Page</h1>
      <Counter 
      prefill={ 
        { 
          "counter": 0, 
          "messages": { 
            "increment": "Counter is incremented!", 
            "decrement": "Counter is decremented!" 
          } 
        } 
      }/>
    </main>
  );
}