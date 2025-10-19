import Image from "next/image";

export default async function Home() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const res = await fetch(url);
  const apiData = await res.json();
  console.log(apiData);

  return (
    <>
      <div>
        <h1 className="text-center text-2xl font-bold border-2 border-slate-800 w-fit m-auto px-52 bg-slate-400 rounded-full">
          My API Data
        </h1>
        {apiData.map((books: any, index: any) => (
          <div
            key={books.id}
            className={`${
              books.id % 2 == 0 ? "bg-red-500" : "bg-cyan-500"
            } text-center container m-auto shadow-lg my-1 shadow-gray-700`}
          >
            <h1>{books.id}</h1>
            <h1>{books.title}</h1>
            <h1>{books.completed ? "completed" : "not completed"}</h1>
          </div>
        ))}
      </div>
    </>
  );
}
